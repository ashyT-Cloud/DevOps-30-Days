# 🚀 Day 24 - Deploying Custom App on Kubernetes

## 🎯 Objective

Deploy a custom Node.js application to Kubernetes using Docker and YAML manifests.

---

## 🧱 Architecture

Node App → Docker Image → DockerHub → Kubernetes Deployment → Service → Port Forward → Browser

---

## ⚙️ Steps Performed

### 1. Containerized Application

* Created Dockerfile for Node.js app
* Built Docker image
* Pushed image to DockerHub

---

### 2. Kubernetes Deployment

* Created deployment.yaml
* Deployed application with 2 replicas

---

### 3. Service Exposure

* Created service.yaml
* Exposed app using NodePort

---

### 4. Debugging Issue

* Faced connection refused error
* Identified issue with old pods still running
* Removed outdated deployment
* Restarted correct deployment

---

### 5. Access Application

kubectl port-forward service/myapp-service 8080:3000 --address 0.0.0.0

Access:
http://<EC2-PUBLIC-IP>:8080

---

## 🔧 Commands Used

docker build -t <username>/myapp:v1 .
docker push <username>/myapp:v1

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

kubectl get pods
kubectl logs <pod>
kubectl exec -it <pod> -- /bin/sh

kubectl port-forward service/myapp-service 8080:3000 --address 0.0.0.0

---

## 📌 Key Learnings

* End-to-end Kubernetes deployment
* Docker + Kubernetes integration
* Debugging container vs application issues
* Understanding service routing and pod selection
* Handling multi-pod traffic issues

---

## 🧠 Interview Summary

“I containerized my Node.js application, pushed it to DockerHub, and deployed it on Kubernetes using YAML. I debugged service routing issues caused by outdated pods and ensured stable application access.”

---


