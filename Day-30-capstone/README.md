# 🚀 Day 30 - DevOps Capstone Project

## 🎯 Objective

Build a production-style DevOps workflow by integrating Docker, Kubernetes, Helm, CI/CD, Persistent Storage, and Ingress concepts into one unified project.

---

# 🧱 Architecture

GitHub → GitHub Actions → DockerHub → Kubernetes → Helm → Persistent Storage → Ingress

---

# ⚙️ Components Used

## ☁️ Cloud

* AWS EC2

## 🐳 Containerization

* Docker

## ☸️ Orchestration

* Kubernetes (Minikube)

## 🚀 CI/CD

* GitHub Actions

## 📦 Package Management

* Helm Charts

## 💾 Storage

* Persistent Volumes & Persistent Volume Claims

## 🌐 Networking

* Kubernetes Ingress

---

# 📂 Project Structure

```plaintext id="u9bphm"
app/
k8s/
helm/
cicd/
docs/
```

---

# 🔥 Features Implemented

* Dockerized Node.js application
* Kubernetes deployment & services
* Rolling updates & scaling
* Kubernetes Ingress
* Persistent Storage
* Helm-based deployment
* GitHub Actions CI pipeline
* DockerHub image automation

---

# 🧠 Key Learnings

* End-to-end DevOps workflow
* Kubernetes troubleshooting
* Helm templating
* CI/CD automation
* Persistent container storage
* Production networking concepts

---

# ⚠️ Limitations

Full Continuous Deployment from GitHub Actions to Minikube was partially limited because Minikube uses a private internal network on EC2.

---

# 🔥 Interview Summary

“I built a complete DevOps capstone project integrating Docker, Kubernetes, Helm, Persistent Storage, Ingress, and GitHub Actions CI/CD automation on AWS EC2.”

---

# 🚀 Future Improvements

* AWS EKS
* ArgoCD GitOps
* Terraform Infrastructure Automation
* Monitoring with Prometheus & Grafana
