# Nginx Configuration Changes

## File Edited:

`/etc/nginx/sites-available/default`

## Changes Made:

```nginx
location / {
    proxy_pass http://127.0.0.1:5000;
}
```

## Commands Used:

sudo nginx -t
sudo systemctl restart nginx
