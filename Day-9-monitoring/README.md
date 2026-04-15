# 📊 Day 9 - Monitoring & Debugging (DevOps)

## 🚀 Overview

On Day 9, I focused on system monitoring and real-world debugging scenarios on an AWS EC2 instance.

---

## 🧠 Key Concepts Learned

### 🔍 Monitoring Types

* System Monitoring (CPU, Memory, Disk)
* Service Monitoring (Nginx)
* Log Monitoring

---

## ⚙️ Tools Used

* Linux Commands (`htop`, `df -h`, `ps aux`)
* Nginx
* UFW Firewall

---

## 🧪 Practical Tasks Performed

### ✅ System Monitoring

* Checked CPU & Memory using `htop`
* Checked disk usage using `df -h`

### ✅ Service Monitoring

* Verified Nginx status using `systemctl`
* Started and stopped services

### ✅ Log Monitoring

* Accessed logs:

  * `/var/log/nginx/access.log`
  * `/var/log/nginx/error.log`

---

## 💥 Break & Fix Scenarios

### 1. Stopped Nginx

* Broke: `systemctl stop nginx`
* Fixed: `systemctl start nginx`

### 2. Killed Process

* Used `kill -9` on nginx master process

### 3. Firewall Blocking

* Blocked port 80 using UFW
* Allowed port again

### 4. Reverse Proxy Failure (Real Issue)

#### 🔴 Problem:

Nginx was running but site was not accessible

#### 🔍 Debugging:

* Checked logs using:

  ```bash
  sudo tail -f /var/log/nginx/error.log
  ```
* Found error:

  ```
  connect() failed (111: Connection refused)
  ```

#### 🧠 Root Cause:

Backend application on port 3000 was not running

#### 🛠️ Fix:

* Restarted application
* Verified using:

  ```bash
  curl http://localhost:3000
  ```

---

## 🎯 Key Learnings

* Logs are the most important debugging tool
* Always follow structured debugging approach:

  1. Service status
  2. Ports
  3. Logs
  4. Firewall
  5. System health

---

## 🔥 Real-World Skills Gained

* Debugging production-like issues
* Understanding reverse proxy failures
* Service and process management
* Network and firewall troubleshooting

---

## 🚀 Next Step

Moving to advanced monitoring using Prometheus and Grafana.
