cd ../
sh ./script.sh
sudo npm install pm2@latest -g
pm2 delete all
cd ../server
npm install
pm2 start "npm start"
cd ./client
npm install
npm run build
pm2 start "npm start"