# 🚀 Day 5: CI/CD with GitHub Actions

## 📌 Overview

In Day 5, I implemented a CI pipeline using GitHub Actions that automatically builds and pushes a Docker image to Docker Hub whenever code is pushed.

---

## ⚙️ Technologies Used

* GitHub Actions
* Docker
* Node.js

---

## 🔄 Workflow

1. Code pushed to repository
2. GitHub Actions workflow triggers
3. Docker image is built
4. Image is pushed to Docker Hub

---

## 🐳 Docker Image

Image is available on Docker Hub:

```bash
<your-docker-username>/day5-app:latest
```

---

## 📂 Project Structure

```
Day-5-github-actions/
├── app.js
├── package.json
├── Dockerfile
└── README.md
```

---

## ▶️ How to Run Locally

```bash
docker build -t day5-app .
docker run -p 3000:3000 day5-app
```

---

## 🌐 Output

Visit:

```
http://<your-ec2-ip>:3000
```

---

## 🎯 Key Learnings

* CI/CD fundamentals
* GitHub Actions workflow creation
* Docker image build and push automation
* Handling secrets securely in CI/CD pipelines

---

## ✅ Status

✔ CI Pipeline Working
✔ Docker Image Build & Push Successful

---

🔥 Moving to Day 6: Continuous Deployment (Auto Deploy to EC2)
