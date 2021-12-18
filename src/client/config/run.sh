echo "############################"
echo "#                          #"
echo "# update nginx config file #"
echo "#                          #"
echo "############################"
sh ./script.sh


cd ../

echo "#############################"
echo "#                           #"
echo "# install pm2@last globally #"
echo "#                           #"
echo "#############################"
sudo npm install pm2@latest -g

echo "#############################"
echo "#                           #"
echo "#    clear pm2 processes    #"
echo "#                           #"
echo "#############################"
sudo pm2 stop all
sudo pm2 delete all

echo "############################"
echo "#                          #"
echo "#  run npm install server  #"
echo "#                          #"
echo "############################"
cd ./server
sudo npm install -f


echo "############################"
echo "#                          #"
echo "#     pm2 start server     #"
echo "#                          #"
echo "############################"
sudo pm2 start

echo "############################"
echo "#                          #"
echo "#  run npm install client  #"
echo "#                          #"
echo "############################"

cd ../client
sudo npm install -f
echo "############################"
echo "#                          #"
echo "#      bulding Client      #"
echo "#                          #"
echo "############################"
sudo npm run build

echo "############################"
echo "#                          #"
echo "#     pm2 start client     #"
echo "#                          #"
echo "############################"
sudo pm2 start