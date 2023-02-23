
JEKYLL_ENV=production

echo $JEKYLL_ENV

jekyll build

# npm install --save-dev sw-precache

npm run precache
