# 🚀 Day 25 - Kubernetes Scaling & Rolling Updates

## 🎯 Objective

Learn how to scale applications and perform zero-downtime updates in Kubernetes.

---

## 🧱 Architecture

User → Service → Deployment → Multiple Pods → Rolling Update

---

## ⚙️ Steps Performed

### 1. Scaling Deployment

* Increased replicas from 2 to 4
* Kubernetes automatically created additional pods

Command:
kubectl scale deployment myapp-deployment --replicas=4

---

### 2. Rolling Update

* Updated application code
* Built new Docker image
* Updated deployment with new image version
* Applied changes

Command:
kubectl apply -f deployment.yaml

---

### 3. Verified Rollout

* Observed pods being replaced gradually
* Ensured zero downtime during update

Command:
kubectl rollout status deployment myapp-deployment

---

### 4. Rollback (Concept)

* Learned how to revert to previous version if deployment fails

Command:
kubectl rollout undo deployment myapp-deployment

---

## 🔧 Commands Used

kubectl scale deployment myapp-deployment --replicas=4
kubectl rollout status deployment myapp-deployment
kubectl rollout undo deployment myapp-deployment

---

## 📌 Key Learnings

* Horizontal scaling in Kubernetes
* Rolling updates for zero downtime
* Versioned deployments using Docker images
* Safe rollback mechanisms
* Production-grade deployment strategies

---

## 🧠 Interview Summary

“I scaled applications in Kubernetes and implemented rolling updates to deploy new versions without downtime, ensuring high availability and reliability.”

---

