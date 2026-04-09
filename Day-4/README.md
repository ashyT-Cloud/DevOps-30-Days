# Day 4 - Docker Compose Multi-Container App 🚀

## 📌 Objective

Run a multi-container application using Docker Compose

---

## 🧠 Architecture

User → App (Python) → Redis

---

## ⚙️ Services

* **App**: Python HTTP server
* **Redis**: Stores visit count

---

## 🐳 docker-compose.yml

```yaml
version: '3'

services:
  app:
    build: .
    ports:
      - "5000:5000"
    depends_on:
      - redis

  redis:
    image: redis:alpine
```

---

## 🧪 Issues Faced

### ❌ Container exited with code 1

* Cause: Missing redis Python library

### ✅ Fix:

* Added requirements.txt
* Installed dependencies in Dockerfile

---

## 💡 Learnings

* Multi-container architecture
* Service-to-service communication
* Importance of dependencies in containers
* Debugging using docker compose logs

---

## 🚀 Output

App shows dynamic visit count:
Hello Ash 🚀 | Visits: 1, 2, 3...

---
