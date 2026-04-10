# Troubleshooting - Day 2

## Issue 1: Port 5000 not accessible

### Cause:

Security Group did not allow inbound traffic

### Fix:

Added rule:
Custom TCP → Port 5000 → 0.0.0.0/0

---

## Issue 2: Nginx Connection Refused

### Error:

connect() failed (111: Connection refused)

### Cause:

Backend app not running

### Fix:

Restarted Python app using:
python3 app.py &

---

## Issue 3: Testing confusion

### Problem:

Used public IP inside EC2 instead of localhost

### Learning:

* Inside EC2 → use localhost
* Outside EC2 → use public IP
