#!/bin/sh
cd /Users/lim/GITHUB/node-server/blog-1/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log
