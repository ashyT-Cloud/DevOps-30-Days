# 🚀 Day 29 - Helm Charts in Kubernetes

## 🎯 Objective

Learn how to package, deploy, and manage Kubernetes applications using Helm.

---

## 🧱 What is Helm?

Helm is the package manager for Kubernetes that simplifies deployment and management of applications using reusable templates called Charts.

---

## ⚙️ Steps Performed

### 1. Installed Helm

* Installed Helm CLI
* Verified Helm version

### 2. Created Helm Chart

* Used `helm create myapp-chart`
* Explored chart structure

### 3. Configured Application

* Updated `values.yaml`
* Added custom Docker image
* Modified service and container ports

### 4. Installed Helm Release

* Deployed application using:

  * `helm install`

### 5. Upgraded Helm Release

* Modified values
* Applied changes using:

  * `helm upgrade`

### 6. Debugged Issues

* Fixed ImagePullBackOff
* Corrected Docker image tags
* Resolved service/container port mismatch

---

## 📄 Helm Commands Used

```bash
helm install myapp-release myapp-chart
helm upgrade myapp-release myapp-chart
helm list
helm rollback myapp-release 1
```

---

## 🧠 Key Learnings

* Helm Charts simplify Kubernetes deployments
* values.yaml controls reusable configurations
* Helm supports upgrades and rollbacks
* Kubernetes applications often require custom port mapping

---

## 🔥 Interview Summary

“I used Helm to package and manage Kubernetes applications, including deployment, upgrades, rollback, and troubleshooting configuration issues.”

---

## 📌 Future Scope

* Helm repositories
* Helm dependencies
* Production-grade chart design
* ArgoCD + Helm GitOps
