# 🚀 Day 16 - Kubernetes Ingress (Routing & External Access)

## 📌 Objective

Implement Kubernetes Ingress to route external traffic to services without using NodePort directly, and understand real-world traffic flow.

---

## 🏗️ Architecture

```id="3lq9hk"
Browser Request
      ↓
EC2 Public IP : NodePort
      ↓
Ingress Controller (NGINX)
      ↓
Kubernetes Service
      ↓
Pods (Node.js App)
```

---

## ⚙️ What I Did

### 1. Installed Ingress Controller

* Deployed NGINX Ingress Controller using:

  ```
  kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml
  ```

---

### 2. Created Ingress Resource

```yaml id="u1r5av"
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: node-ingress
spec:
  ingressClassName: nginx
  rules:
  - http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: node-service
            port:
              number: 80
```

---

### 3. Applied Configuration

```
kubectl apply -f ingress.yml
```

---

### 4. Accessed Application

```
http://<EC2-PUBLIC-IP>:<NodePort>
```

Example:

```
http://54.196.197.153:31785
```

---

## 🔐 Host-Based Routing (Optional)

Configured domain-based routing:

```yaml id="8r4c9q"
host: myapp.local
```

Mapped locally using:

```
/etc/hosts (Linux)
C:\Windows\System32\drivers\etc\hosts (Windows)
```

---

## 🐞 Issues Faced & Fixes

### ❌ 404 Not Found (NGINX)

✔ Cause: Host mismatch
✔ Fix: Added correct `ingressClassName` and removed host restriction for testing

---

### ❌ Ingress ADDRESS empty

✔ Cause: kubeadm cluster (no LoadBalancer)
✔ Fix: Used NodePort for access

---

### ❌ Not accessible externally

✔ Cause: Host-based routing mismatch
✔ Fix: Removed host or configured `/etc/hosts` properly

---

### ❌ Domain working internally but not externally

✔ Cause: DNS mapping only on EC2
✔ Fix: Understood difference between internal vs external resolution

---

## 🧠 Key Learnings

* Ingress works as a **Layer 7 (HTTP) router**
* Routes traffic based on:

  * Host (domain)
  * Path (URL)
* Difference between:

  * NodePort vs Ingress
  * Internal vs External access
* Importance of **Host header in HTTP requests**
* Real-world debugging of routing issues

---

## 🚀 Outcome

Successfully implemented Kubernetes Ingress and routed traffic to the application, enabling cleaner and production-style access.

---

## 🔥 Next Steps

* Day 17: HTTPS (TLS configuration)
* Secure Ingress with SSL certificates
* Domain-based production setup

---

## ⭐ Note

This setup was implemented on AWS EC2 using a kubeadm-based Kubernetes cluster (without managed load balancer).
