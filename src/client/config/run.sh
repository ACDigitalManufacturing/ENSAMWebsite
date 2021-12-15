cd ../
sudo npm install pm2@latest -g
pm2 delete all
cd ./client
npm run build
pm2 start "npm start"
cd ../server
npm start