cd ../
echo "# nginx configuration start"
./script.sh
echo "# nginx configuration done"

echo "# installing pm2"
sudo npm install pm2@latest -g
echo "# finish installation of pm2"
echo "# clear all pm2 servers already runing"
pm2 delete all

echo "############################"
echo "#                          #"
echo "# install and start server #"
echo "#                          #"
echo "############################"

cd ./server
npm install -f
pm2 start npm --name "server" --interpreter bash -- start

echo "############################"
echo "#                          #"
echo "# install and start client #"
echo "#                          #"
echo "############################"

cd ../client
npm install -f
npm run build
pm2 start npm --name "client" --interpreter bash -- start