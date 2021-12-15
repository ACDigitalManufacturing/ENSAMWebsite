# configure nginx

sudo su

cp \
    ./ensam-website-nginx.conf \
    /etc/nginx/sites-available/ensam-website-nginx.conf

ln -s \
    /etc/nginx/sites-available/ensam-website-nginx.conf \
    /etc/nginx/sites-enabled/ensam-website-nginx.conf

systemctl reload nginx