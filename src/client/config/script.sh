# configure nginx

sudo cp \
    ./ensam-website-nginx.conf \
    /etc/nginx/sites-available/ensam-website-nginx.conf

sudo systemctl reload nginx