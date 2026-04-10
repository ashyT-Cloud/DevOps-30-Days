# DevOps 30-Day Challenge 🚀

# Day 1 - Linux + Nginx Setup on AWS EC2

## 🚀 Objective
Launch an EC2 instance and host a web server using Nginx.

---

## ⚙️ Steps Performed
1. Launched an Ubuntu EC2 instance
2. Connected via SSH
3. Installed Nginx
4. Verified using curl localhost
5. Accessed via public IP

---

## 🧪 Issues Faced

### ❌ Issue:
The website is not accessible from the browser

### 🔍 Debug Steps:
- Checked nginx status
- Verified port 80 listening
- Checked UFW firewall
- Investigated AWS Security Group

### ✅ Solution:
Opened port 80 in the security group

---


## 💡 Learnings
- Difference between localhost vs public access
- Importance of security groups
- Basic debugging approach
