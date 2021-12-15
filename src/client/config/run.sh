cd ../
echo "# nginx configuration start"
./script.sh
echo "# nginx configuration done"

echo "# installing pm2"
sudo npm install pm2@latest -g
echo "# finish installation of pm2"
echo "# clear all pm2 servers already runing"
sudo pm2 stop all

echo "############################"
echo "#                          #"
echo "# install and start server #"
echo "#                          #"
echo "############################"

cd ./server
sudo npm install -f
sudo pm2 start

echo "############################"
echo "#                          #"
echo "# install and start client #"
echo "#                          #"
echo "############################"

cd ../client
sudo npm install -f
echo "############################"
echo "#                          #"
echo "#      Bulding Client      #"
echo "#                          #"
echo "############################"
sudo npm run build
sudo pm2 start