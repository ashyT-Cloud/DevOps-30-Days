# 🚀 Day 6: Continuous Deployment (EC2 Auto Deploy)

## 📌 Overview

In Day 6, I extended my CI pipeline to a full CI/CD pipeline by automatically deploying the Docker container to an EC2 instance after every push.

---

## ⚙️ Technologies Used

* GitHub Actions
* Docker
* AWS EC2
* SSH

---

## 🔄 Workflow Architecture

```text
Code Push → GitHub Actions → Build Docker Image → Push to Docker Hub → SSH to EC2 → Pull Image → Run Container
```

---

## 🔐 Secrets Used

* DOCKER_USERNAME
* DOCKER_PASSWORD
* EC2_HOST
* EC2_USER
* EC2_SSH_KEY

---

## ⚙️ Deployment Steps

1. SSH into EC2 using GitHub Actions
2. Pull latest Docker image
3. Stop existing container (if running)
4. Remove old container
5. Run new container on port 3000

---

## 🌐 Live Application

```text
http://<your-ec2-public-ip>:3000
```

---

## 🧠 Key Learnings

* End-to-end CI/CD pipeline
* Secure authentication using secrets
* SSH automation in GitHub Actions
* Real-world deployment debugging

---

## ✅ Status

✔ CI Pipeline Working
✔ CD Pipeline Working
✔ Application Live on EC2

---

🔥 This completes a full production-style CI/CD pipeline.
