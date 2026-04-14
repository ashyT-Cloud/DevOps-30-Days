# 🚀 Day 7: Nginx Reverse Proxy (Production Setup)

## 📌 Overview

In Day 7, I configured Nginx as a reverse proxy to route traffic from port 80 to a Docker container running on port 3000.

This removes the need to expose application ports directly and simulates a real production environment.

---

## 🧩 Architecture

```
User → Nginx (Port 80) → Docker Container (Port 3000)
```

---

## ⚙️ Steps Performed

1. Installed Nginx on EC2
2. Configured reverse proxy in Nginx
3. Restarted Nginx service
4. Opened port 80 in AWS Security Group
5. Verified application access via public IP

---

## 🔧 Nginx Configuration

```nginx
server {
    listen 80;

    location / {
        proxy_pass http://127.0.0.1:3000;
    }
}
```

---

## 🌐 Access

Application is now accessible without specifying port:

```
http://<your-ec2-public-ip>
```

---

## 🧠 Key Learnings

* Reverse proxy concept
* Nginx configuration basics
* Production traffic routing
* Debugging caching issues (browser cache vs server config)

---

## ⚠️ Challenges Faced

* Nginx configuration errors
* Reverse proxy not working initially
* Browser caching issue (resolved using incognito mode)

---

## ✅ Status

✔ Nginx configured successfully
✔ Reverse proxy working
✔ Application accessible via port 80
✔ Production-like setup achieved

---

🔥 This setup improves security and usability by hiding internal application ports.
