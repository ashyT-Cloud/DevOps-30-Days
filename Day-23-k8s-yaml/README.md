# 🚀 Day 23 - Kubernetes with YAML (Declarative Approach)

## 🎯 Objective

Deploy and expose an application in Kubernetes using **YAML manifests** instead of CLI commands.

---

## 🧠 Why YAML?

* Declarative infrastructure (desired state)
* Version controlled (Git)
* Reproducible deployments
* Industry standard approach

---

## 🧱 Architecture

Kubernetes YAML → Deployment → Pods → Service → Port Forward → Browser

---

## ⚙️ Steps Performed

### 1. Created Deployment YAML

* Defined application using `deployment.yml`
* Configured:

  * 2 replicas
  * nginx container
  * container port

### 2. Applied Deployment

kubectl apply -f deployment.yml

### 3. Verified Resources

kubectl get deployments
kubectl get pods

---

### 4. Created Service YAML

* Exposed application using `NodePort`
* Connected service to pods using labels

### 5. Applied Service

kubectl apply -f service.yml

### 6. Accessed Application

kubectl port-forward service/myapp-service 8080:80 --address 0.0.0.0

Access via:
http://<EC2-PUBLIC-IP>:8080

---

## 📄 YAML Files

### 🔹 deployment.yml

* Defines application deployment
* Manages replicas and pods

### 🔹 service.yml

* Exposes application
* Handles networking inside cluster

---

## 🔧 Commands Used

kubectl apply -f deployment.yml
kubectl apply -f service.yml
kubectl get pods
kubectl get svc
kubectl port-forward service/myapp-service 8080:80 --address 0.0.0.0

---

## ✅ Output

* Application successfully deployed
* Running with multiple replicas
* Accessible externally via port-forward

---

## 📌 Key Learnings

* Declarative Kubernetes using YAML
* Difference between Deployment and Service
* Replica-based scaling
* Label and selector matching
* Kubernetes networking basics
* Debugging YAML errors and cluster issues

---

## 🧠 Interview Summary

“I deployed applications in Kubernetes using YAML manifests, enabling reproducible and scalable infrastructure. I configured services for exposure and used port-forwarding for external access.”

---

