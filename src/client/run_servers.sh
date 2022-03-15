
echo "#############################"
echo "#                           #"
echo "#    clear pm2 processes    #"
echo "#                           #"
echo "#############################"
sudo pm2 stop all
sudo pm2 delete all

echo "############################"
echo "#                          #"
echo "#     pm2 start server     #"
echo "#                          #"
echo "############################"
cd ./server
pm2 start

echo "############################"
echo "#                          #"
echo "#     pm2 start client     #"
echo "#                          #"
echo "############################"
cd ../client
pm2 start