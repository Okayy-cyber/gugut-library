// Netlify Function: Azure Speech TTS proxy for Gugut Library
// Route: POST /.netlify/functions/tts-azure
//
// Serves the languages ElevenLabs cannot speak: Amharic + Somali (more later).
// Keeps the Azure key entirely server-side.
//
// Required env vars (set in Netlify dashboard → Environment variables):
//   AZURE_SPEECH_KEY     — key from the Azure Speech resource
//   AZURE_SPEECH_REGION  — e.g. "eastus" (the region of that resource)
//
// Request body (JSON):
//   { text: string, lang: "am" | "so", speed?: number (0.5–1.5, 1 = normal) }
//
// Response (JSON): { audio_base64: string }  — MP3 audio

const VOICES = {
  am: { voice: 'am-ET-MekdesNeural', locale: 'am-ET' }, // Amharic — warm female
  so: { voice: 'so-SO-UbaxNeural',   locale: 'so-SO' }, // Somali  — warm female
};

// Minimal XML escaping for SSML text content
function xmlEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

exports.handler = async function (event) {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const KEY = process.env.AZURE_SPEECH_KEY;
  const REGION = process.env.AZURE_SPEECH_REGION;
  if (!KEY || !REGION) {
    console.error('AZURE_SPEECH_KEY / AZURE_SPEECH_REGION env vars are not set');
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Azure TTS is not configured — contact the site owner.' }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Invalid JSON body' }),
    };
  }

  const { text, lang, speed = 1 } = body;
  const v = VOICES[lang];
  if (!text || !v) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'text and lang ("am" | "so") are required' }),
    };
  }

  // Azure prosody rate: percentage offset from normal ("-10%" ≈ 0.9×)
  const clamped = Math.max(0.5, Math.min(1.5, Number(speed) || 1));
  const ratePct = Math.round((clamped - 1) * 100);
  const rate = (ratePct >= 0 ? '+' : '') + ratePct + '%';

  const ssml =
    `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${v.locale}">` +
    `<voice name="${v.voice}"><prosody rate="${rate}">${xmlEscape(text)}</prosody></voice>` +
    `</speak>`;

  try {
    const resp = await fetch(
      `https://${REGION}.tts.speech.microsoft.com/cognitiveservices/v1`,
      {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': KEY,
          'Content-Type': 'application/ssml+xml',
          'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3',
          'User-Agent': 'GugutLibrary',
        },
        body: ssml,
      }
    );

    if (!resp.ok) {
      const errText = await resp.text();
      console.error('Azure TTS upstream error:', resp.status, errText);
      return {
        statusCode: resp.status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Azure TTS error', detail: errText.slice(0, 300) }),
      };
    }

    const buf = Buffer.from(await resp.arrayBuffer());
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      body: JSON.stringify({ audio_base64: buf.toString('base64') }),
    };
  } catch (err) {
    console.error('Azure TTS proxy fetch error:', err);
    return {
      statusCode: 502,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to reach Azure Speech' }),
    };
  }
};
