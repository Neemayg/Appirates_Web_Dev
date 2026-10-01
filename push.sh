#!/bin/bash
cd /Users/neemaysmac/Desktop/CLG_WEB_DEV/Day-2_Project
rm -rf .git/rebase-merge .git/REBASE_HEAD 2>/dev/null
export GIT_EDITOR=:
git add .
git commit -m "Day 2 Project - Number Guessing Game" 2>/dev/null || true
git push origin main -f
echo "Push complete!"
