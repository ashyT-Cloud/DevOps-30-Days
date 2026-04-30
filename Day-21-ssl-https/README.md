# Day 21 - HTTPS Setup using DuckDNS & Let's Encrypt

## 🚀 Objective

Secure the deployed application using HTTPS with a free domain and SSL certificate.

---

## 🌐 Domain Setup

* Used DuckDNS to create a free domain
* Mapped EC2 public IP to domain

---

## 🔐 SSL Configuration

* Installed Certbot
* Generated SSL certificate using Let's Encrypt
* Configured Nginx to serve HTTPS (port 443)
* Enabled automatic renewal

---

## 🧱 Architecture

User → HTTPS (443) → Nginx → PM2 → Node App

---

## 🔧 Commands Used

sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx
sudo certbot renew --dry-run

---

## ✅ Output

Application accessible via secure URL:

https://ash-devops.duckdns.org

---

## 📌 Key Learnings

* Domain mapping with DuckDNS
* SSL certificate generation using Let's Encrypt
* Nginx HTTPS configuration
* Reverse proxy with SSL
* Debugging 502 Bad Gateway issues

---
