# 🚀 Day 27 - Kubernetes CI/CD Pipeline

## 🎯 Objective

Automate Docker image build and deployment workflow using GitHub Actions and Kubernetes.

---

## 🧱 CI/CD Workflow

GitHub Push → GitHub Actions → Docker Build → DockerHub Push → Kubernetes Deployment

---

## ⚙️ Steps Performed

### 1. Created GitHub Actions Workflow

* Added workflow inside `.github/workflows/deploy.yml`
* Configured automatic trigger on push to main branch

---

### 2. Docker Automation

* Built Docker image automatically
* Tagged image using Git commit SHA
* Pushed image to DockerHub

---

### 3. Kubernetes Integration

* Configured `KUBE_CONFIG` secret
* Connected workflow with Kubernetes cluster
* Attempted automated deployment update

---

## 🔐 GitHub Secrets Used

* DOCKER_USERNAME
* DOCKER_PASSWORD
* KUBE_CONFIG

---

## ⚠️ Limitation Encountered

Minikube was running inside EC2 using a private Docker network (`192.168.x.x`), which prevented external GitHub runners from accessing the Kubernetes API server directly.

As a result:

* CI (Build & Push) worked successfully ✅
* Full CD deployment from GitHub Actions was partially limited ⚠️

---

## 🧠 Key Learnings

* GitHub Actions workflow creation
* Docker image automation
* Kubernetes authentication using kubeconfig
* Embedded certificate handling (`--flatten`)
* Real-world CI/CD debugging
* Difference between Minikube and production Kubernetes clusters

---

## 🔥 Interview Summary

“I implemented a CI/CD pipeline using GitHub Actions to automate Docker image build and push workflows. I also integrated Kubernetes deployment automation and investigated networking limitations associated with Minikube running on EC2.”

---

## 📌 Future Improvement

Use managed Kubernetes services like:

* AWS EKS
* Azure AKS
* Google GKE

for production-grade continuous deployment.
