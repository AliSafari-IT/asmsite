# delete node_modules, package-lock.json, yarn.lock
echo ""
echo "Deleting node_modules, package-lock.json, yarn.lock"
rm -rf node_modules package-lock.json yarn.lock
echo ""
echo "Installing dependencies with npm"
# install dependencies with npm
npm install
echo ""
echo "Done!"
