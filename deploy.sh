#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

git add .
git commit -m "deploy"

git push origin main

git subtree push --prefix dist origin gh-pages