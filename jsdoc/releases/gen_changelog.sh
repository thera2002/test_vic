#!/bin/bash
CURR=$(git describe --abbrev=0)
PREV=$(git describe --abbrev=0 --tags ${CURR}^)
echo "### Commits" 
git log --pretty=format:"- %s (%ci %cn)" ${PREV}..${CURR}
