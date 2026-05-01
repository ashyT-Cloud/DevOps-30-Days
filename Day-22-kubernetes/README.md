# Day 22 - Kubernetes Basics (Minikube)

## 🚀 Objective

Set up a Kubernetes cluster and deploy an application.

---

## 🧱 Architecture

kubectl → Deployment → Pod → Service → Port Forward → Browser

---

## ⚙️ Steps Performed

1. Installed kubectl and Minikube
2. Started Kubernetes cluster using Docker driver
3. Created Deployment using nginx image
4. Exposed deployment using NodePort service
5. Used port-forward to access application externally

---

## 🔧 Commands Used

kubectl create deployment myapp --image=nginx
kubectl expose deployment myapp --type=NodePort --port=80
kubectl get pods
kubectl get svc
kubectl port-forward service/myapp 8080:80 --address 0.0.0.0

---

## ✅ Output

Application accessible via:

http://<EC2-PUBLIC-IP>:8080

---

## 📌 Key Learnings

* Kubernetes architecture basics
* Deployment and Pod creation
* Service exposure
* Port-forwarding for external access
* Debugging Kubernetes resources
