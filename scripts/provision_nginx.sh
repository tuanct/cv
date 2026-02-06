set -euo pipefail

DEPLOY_PATH="${DEPLOY_PATH:-/var/www/cv}"
DOMAIN="${DOMAIN:-_}"
SITE_NAME="${SITE_NAME:-cv}"

if command -v apt-get >/dev/null 2>&1; then
  sudo apt-get update -y
  sudo apt-get install -y nginx
else
  echo "Unsupported OS: apt-get not found" >&2
  exit 1
fi

sudo mkdir -p "$DEPLOY_PATH"
sudo chown -R "$USER":"$USER" "$DEPLOY_PATH" || true

SITE_CONF="/etc/nginx/sites-available/${SITE_NAME}.conf"
sudo tee "$SITE_CONF" >/dev/null <<EOF
server {
  listen 80;
  server_name ${DOMAIN};

  root ${DEPLOY_PATH};
  index index.html;

  location / {
    try_files \$uri \$uri/ /index.html;
  }
}
EOF

sudo rm -f "/etc/nginx/sites-enabled/${SITE_NAME}.conf"
sudo ln -s "$SITE_CONF" "/etc/nginx/sites-enabled/${SITE_NAME}.conf"

if [ -e /etc/nginx/sites-enabled/default ]; then
  sudo rm -f /etc/nginx/sites-enabled/default
fi

sudo nginx -t
sudo systemctl enable nginx
sudo systemctl reload nginx

