# Day 20 - Production Setup (Nginx + PM2)

## 🚀 Objective

Set up a production-ready environment using Nginx as a reverse proxy and PM2 for process management.

---

## 🧱 Architecture

User → Nginx (Port 80) → Node App (Port 3000 via PM2)

---

## ⚙️ Steps Performed

### 1. Installed Nginx

* Configured reverse proxy
* Exposed app on port 80

### 2. Created Node App

* Simple HTTP server running on port 3000

### 3. Process Management using PM2

* Ran app in background
* Enabled auto restart
* Enabled startup on reboot

### 4. Connected Nginx to App

* Routed traffic from port 80 → 3000

---

## 🔧 Commands Used

### PM2

pm2 start app.js
pm2 save
pm2 startup

### Nginx

sudo nano /etc/nginx/sites-available/default
sudo nginx -t
sudo systemctl restart nginx

---

## ✅ Output

Application accessible via:
http://<EC2-PUBLIC-IP>

(No need to specify port)

---

## 📌 Key Learnings

* Reverse Proxy using Nginx
* Process Management using PM2
* Production-level deployment structure
* Debugging port & service issues

---
