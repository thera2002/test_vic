#!/bin/bash
CURR=$(git describe --abbrev=0 --tags)
PREV=$(git describe --abbrev=0 --tags ${CURR}^)
echo "### Commits $PREV $CURR" 
git log --pretty=format:"- %s (%ci %cn)" ${PREV}...${CURR}
