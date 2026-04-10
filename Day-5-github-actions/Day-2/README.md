# Day 2 - Nginx Reverse Proxy Setup 🚀

## 📌 Objective

Set up a backend application and expose it using Nginx as a reverse proxy instead of directly exposing application ports.

---

## 🧠 Architecture

Client → Nginx (Port 80) → Python App (Port 5000)

---

## ⚙️ Steps Performed

1. Created a Python HTTP server running on port 5000
2. Verified application using `curl localhost:5000`
3. Configured Nginx reverse proxy
4. Restarted Nginx service
5. Accessed application via public IP (port 80)

---

## 🧪 Issues Faced & Debugging

### ❌ Issue 1: App not accessible via public IP (port 5000)

* Cause: Port 5000 not open in AWS Security Group
* Solution: Added inbound rule for port 5000

---

### ❌ Issue 2: Nginx error (Connection Refused)

* Error: connect() failed (111: Connection refused)
* Cause: Backend app was not running
* Solution: Restarted Python app

---

## 🔍 Debug Commands Used

* systemctl status nginx
* nginx -t
* tail -f /var/log/nginx/error.log
* curl localhost:5000
* ps aux | grep python

---

## 💡 Key Learnings

* Difference between internal and external traffic
* Role of reverse proxy in production
* Importance of backend service availability
* Real-world debugging approach

---

## 🚀 Output

Application successfully served via:
http://<public-ip>

---

## 📁 Repo Structure

* app.py → backend app
* nginx-config.md → nginx changes
* troubleshooting.md → issues and fixes

---

## 🔥 DevOps Insight

In real-world systems:
Users never directly access backend services.
All traffic flows through a reverse proxy or load balancer.

---
