# 🚀 Day 15 - CI/CD with Kubernetes (GitHub Actions)

## 📌 Objective

Automate the deployment of a Node.js application to a Kubernetes cluster using GitHub Actions.

---

## 🏗️ Architecture

```
GitHub Push
   ↓
GitHub Actions (CI/CD)
   ↓
Docker Build
   ↓
Push to Docker Hub
   ↓
Kubernetes Deployment (kubectl)
   ↓
Pods Updated Automatically
```

---

## ⚙️ What I Did

### 1. Created CI/CD Pipeline

* Used **GitHub Actions**
* Triggered on every push to `main` branch

### 2. Docker Automation

* Built Docker image from application code
* Pushed image to Docker Hub:

  ```
  ashytcloud/day5-app:latest
  ```

### 3. Kubernetes Deployment

* Used `kubectl apply` from pipeline
* Deployed using:

  * `deployment.yml`
  * `service.yml`

### 4. Auto Deployment

* Every code change triggers:

  * New Docker image build
  * Push to Docker Hub
  * Automatic deployment to Kubernetes

---

## 🔐 Secrets Used

Configured in GitHub repository:

* `DOCKER_USERNAME`
* `DOCKER_PASSWORD`
* `KUBE_CONFIG`

---

## 🧪 CI/CD Workflow (deploy.yml)

* Checkout code
* Login to Docker Hub
* Build Docker image
* Push image
* Setup kubeconfig
* Deploy to Kubernetes
* Restart deployment

---

## 🐞 Issues Faced & Fixes

### ❌ Workflow not triggering

✔ Fixed by moving `.github/workflows` to root directory

---

### ❌ Dockerfile not found

✔ Fixed build context path in workflow

---

### ❌ app.js not found

✔ Copied application files into correct directory

---

### ❌ Wrong file path in pipeline

✔ Corrected folder name (`day-15-k8s-cicd`)

---

### ❌ TLS certificate error

✔ Fixed using:

```
--insecure-skip-tls-verify=true
```

---

### ❌ Application not updating

✔ Fixed by:

* Adding `imagePullPolicy: Always`
* Adding rollout restart:

```
kubectl rollout restart deployment node-app
```

---

## 🧠 Key Learnings

* CI/CD pipeline automation using GitHub Actions
* Docker image lifecycle (build → push → deploy)
* Kubernetes deployment automation
* Handling real-world issues like:

  * TLS verification
  * Image caching
  * Deployment rollout

---

## 🚀 Outcome

Successfully built a **fully automated CI/CD pipeline** that deploys applications to Kubernetes on every code push.

---

## 🔥 Next Steps

* Day 16: Ingress Controller (No NodePort)
* Domain-based access
* Advanced Kubernetes networking

---

## ⭐ Note

This project was implemented on a real AWS EC2 instance using Kubernetes (kubeadm).
