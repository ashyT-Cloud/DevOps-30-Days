# 🚀 Day 14 - Kubernetes Setup & Deployment

## 📌 Objective

Set up a Kubernetes cluster using kubeadm and deploy a Node.js application.

---

## ⚙️ What I Did

### 1. Kubernetes Cluster Setup

* Launched EC2 (t2.medium)
* Installed containerd
* Installed kubeadm, kubelet, kubectl
* Initialized cluster using:

  ```
  kubeadm init
  ```
* Configured kubectl access
* Installed Calico network plugin

---

### 2. Application Deployment

* Created `deployment.yaml`
* Deployed Node.js app with 2 replicas
* Verified pods using:

  ```
  kubectl get pods
  ```

---

### 3. Exposing Application

* Created `service.yaml`
* Used NodePort to expose app
* Accessed app via:

  ```
  http://<EC2-PUBLIC-IP>:30007
  ```

---

## 🐞 Issues Faced & Fixes

### ❌ kubeadm not found

✔ Fixed by reinstalling Kubernetes packages

### ❌ Repository error

✔ Fixed malformed APT source

### ❌ Pods stuck in Pending

✔ Removed control-plane taint:

```
kubectl taint nodes --all node-role.kubernetes.io/control-plane-
```

### ❌ kubectl connection refused

✔ Configured kubeconfig using admin.conf

---

## 🧠 Key Learnings

* Kubernetes cluster setup from scratch
* Deployment vs Pod concept
* Service & NodePort exposure
* Debugging real Kubernetes issues
* Taints and scheduling behavior

---

## 🚀 Outcome

Successfully deployed and accessed a Node.js application on Kubernetes.
