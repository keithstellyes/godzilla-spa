#!/usr/bin/env bash

git checkout master && \
npm run build && \
rm -rf /tmp/dist && \
mv dist /tmp && \
git checkout gh-pages && \
cp -r /tmp/dist/* . && \
rm -rf /tmp/dist && \
git add . && \
git commit -m "Update dist for GH Pages (automatic)"
git push
