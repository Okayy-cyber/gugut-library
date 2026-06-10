// Netlify Function: TTS proxy for Gugut Library
// Route: POST /.netlify/functions/tts
//
// Keeps the ElevenLabs API key entirely server-side.
// Required env var: ELEVENLABS_API_KEY  (set in Netlify dashboard → Site settings → Environment variables)
//
// Request body (JSON):
//   { text: string, voice_id: string, model_id?: string, voice_settings?: object }
//
// Response: the raw ElevenLabs JSON ({ audio_base64, alignment, ... })

exports.handler = async function (event) {
  // CORS pre-flight
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

  const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
  if (!ELEVENLABS_API_KEY) {
    console.error('ELEVENLABS_API_KEY env var is not set on this Netlify site');
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'TTS service is not configured — contact the site owner.' }),
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

  const {
    text,
    voice_id,
    model_id = 'eleven_turbo_v2_5',
    voice_settings = {
      stability: 0.5,
      similarity_boost: 0.78,
      style: 0.28,
      use_speaker_boost: true,
    },
  } = body;

  if (!text || !voice_id) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'text and voice_id are required' }),
    };
  }

  try {
    const elResp = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voice_id}/with-timestamps`,
      {
        method: 'POST',
        headers: {
          'xi-api-key': ELEVENLABS_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, model_id, voice_settings }),
      }
    );

    if (!elResp.ok) {
      const errText = await elResp.text();
      console.error('ElevenLabs upstream error:', elResp.status, errText);
      return {
        statusCode: elResp.status,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'ElevenLabs API error', detail: errText }),
      };
    }

    const data = await elResp.json();
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store', // audio is user-specific; don't let Netlify CDN cache it
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.error('TTS proxy fetch error:', err);
    return {
      statusCode: 502,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to reach ElevenLabs' }),
    };
  }
};
