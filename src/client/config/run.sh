cd ../
sh script.sh
sudo npm install pm2@latest -g
pm2 delete all
cd ./server
npm install -f
pm2 start "npm start"
cd ../client
npm install -f
npm run build
pm2 start "npm start"