#!/bin/sh -l

set -e

if [ -z "$CO_TOKEN" ]
then
  echo "You must provide the action with a Coding Personal Access Token secret in order to deploy."
  exit 1
fi

if [ -z "$BRANCH" ]
then
  echo "You must provide the action with a branch name it should deploy to, for example gh-pages or docs."
  exit 1
fi

if [ -z "$CO_REF" ]
then
  echo "No ref found. Please provide one by setting CO_REF."
  exit 1
fi

if [ -z "$FOLDER" ]
then
  echo "You must provide the action with the folder name in the repository where your compiled page lives."
  exit 1
fi

if [ -z "$COMMIT_EMAIL" ]
then
  COMMIT_EMAIL="${GITHUB_ACTOR}@users.noreply.github.com"
fi

if [ -z "$COMMIT_NAME" ]
then
  COMMIT_NAME="${GITHUB_ACTOR}"
fi

## Initializes the repository path using the coding token.
REPOSITORY_PATH="https://${COMMIT_NAME}:${CO_TOKEN}@${CO_REF}.git" && \

# Directs the action to the the Github workspace.
cd $GITHUB_WORKSPACE && \

echo "Deploying!"
cd $FOLDER
git init
git config user.name "$COMMIT_NAME" && git config user.email "$COMMIT_EMAIL"
git add . && git commit -m "deployed via GitHub Action - $(date +"%T")"
git push -f $REPOSITORY_PATH master:$BRANCH
echo "👍 Deployment succesful!"