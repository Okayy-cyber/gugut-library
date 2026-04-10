#!/bin/bash
# Gugut Library — Deploy to GitHub (triggers Netlify rebuild)
# Double-click this file to push the library live

DEPLOY_DIR="$(cd "$(dirname "$0")" && pwd)"
GH_TOKEN="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"
GH_USER="Okayy-cyber"
REPO="gugut-library"
REMOTE="https://${GH_USER}:${GH_TOKEN}@github.com/${GH_USER}/${REPO}.git"

echo ""
echo "╔══════════════════════════════════════════╗"
echo "║   Gugut Library — Deploying...          ║"
echo "╚══════════════════════════════════════════╝"
echo ""

cd "$DEPLOY_DIR"
echo "📁 Working in: $DEPLOY_DIR"
echo ""

# Remove stale git lock files (safe — Claude's VM can't delete these)
rm -f .git/HEAD.lock .git/index.lock 2>/dev/null
echo "🔓 Lock files cleared"

# Set remote with credentials
git remote remove origin 2>/dev/null
git remote add origin "$REMOTE"

# Stage everything
git add -A

# Commit if there are changes
if git diff --cached --quiet; then
  echo "✅ No new changes — pushing existing commits..."
else
  TIMESTAMP=$(date "+%Y-%m-%d %H:%M")
  git commit -m "Deploy Gugut Library — $TIMESTAMP"
  echo "✅ Committed!"
fi

echo ""
echo "📤 Pushing to GitHub..."
echo ""

if git push -u origin master --force 2>&1; then
  echo ""
  echo "✅ Successfully pushed to GitHub!"
  echo ""
  echo "🌐 Netlify will rebuild automatically in ~1 minute."
else
  echo ""
  echo "❌ Push failed — check your internet connection."
fi

echo ""
read -p "Press Enter to close..."
