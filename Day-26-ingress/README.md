# 🚀 Day 26 - Kubernetes Ingress

## 🎯 Objective

Implement Ingress in Kubernetes to route external traffic to services.

---

## 🧱 Architecture

Internet → Ingress → Service → Pods

---

## ⚙️ Steps Performed

* Enabled Ingress addon in Minikube
* Created ingress.yaml
* Configured routing to service
* Tested internally using NodePort and curl

---

## ⚠️ Note

Ingress was tested internally due to Minikube networking limitations on EC2.

---

## 🧠 Key Learnings

* Ingress acts as a Layer 7 load balancer
* Host-based routing vs path-based routing
* Difference between NodePort, ClusterIP, and Ingress
* Real-world networking challenges

---

## 🧠 Interview Summary

“I configured Kubernetes Ingress for routing traffic to services and understood its behavior in local vs cloud environments.”
