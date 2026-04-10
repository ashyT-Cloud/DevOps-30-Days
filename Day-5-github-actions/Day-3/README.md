# Day 3 - Dockerizing Application 🐳

## 🚀 Objective

Containerize Python application and run it using Docker

---

## ⚙️ Steps Performed

1. Installed Docker on EC2
2. Created Dockerfile
3. Built Docker image
4. Ran container using port mapping

---

## 🐳 Dockerfile

```dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY app.py .

EXPOSE 5000

CMD ["python", "app.py"]
```

---

## 🧪 Issues Faced

### ❌ Error:

exec: "python3": executable file not found

### 🔍 Cause:

Base image did not support python3 command

### ✅ Fix:

Changed CMD to use python instead of python3

---

## 💡 Learnings

* Docker containers isolate environment
* Base image matters
* Always rebuild after changes
* Use logs for debugging

---

## 🚀 Output

Application successfully running inside container on port 5000

---
