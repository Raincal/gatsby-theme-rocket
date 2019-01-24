cd public
remote_repo="https://${CO_USER}:${CO_TOKEN}@${CO_REF}.git" && \
rm -rf .git && \
git init && \
git config user.name "${CO_USER}" && \
git config user.email "${CO_EMAIL}" && \
git add . && \
git commit -m "Auto build by netlify" && \
git push --force --quiet $remote_repo master:master && \
cd ../
echo "👍 DEPLOY SUCCESS!"