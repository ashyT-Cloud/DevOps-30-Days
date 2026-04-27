# 🚀 Day 18 - cert-manager (Automatic TLS in Kubernetes)

## 📌 Objective

Automate SSL/TLS certificate management in Kubernetes using **cert-manager**, eliminating the need for manual certificate creation.

---

## 🏗️ Architecture

```id="m3lq7a"
Browser (HTTPS)
        ↓
Ingress Controller (NGINX)
        ↓
cert-manager (Auto Certificate Management)
        ↓
Kubernetes Secret (TLS)
        ↓
Service → Pods (Node.js App)
```

---

## ⚙️ What I Did

### 1. Installed cert-manager

```bash id="r6y4qa"
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.12.3/cert-manager.yaml
```

---

### 2. Verified Installation

```bash id="gx8v8o"
kubectl get pods -n cert-manager
```

---

### 3. Created ClusterIssuer

```yaml id="h3qv0q"
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: selfsigned-issuer
spec:
  selfSigned: {}
```

---

### 4. Applied ClusterIssuer

```bash id="kk4u2w"
kubectl apply -f cluster-issuer.yml
```

---

### 5. Updated Ingress for Auto TLS

```yaml id="l2v9mf"
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: node-ingress
  annotations:
    cert-manager.io/cluster-issuer: selfsigned-issuer
spec:
  ingressClassName: nginx

  tls:
  - hosts:
    - myapp.local
    secretName: auto-tls-secret

  rules:
  - host: myapp.local
    http:
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

### 6. Applied Ingress

```bash id="q0s2mz"
kubectl apply -f ingress-tls.yml
```

---

### 7. Verified Certificate Creation

```bash id="v9yxbt"
kubectl get certificate
```

---

### 8. Tested HTTPS

```bash id="p7l2cd"
curl -k https://myapp.local:<NodePort>
```

Example:

```bash id="r1p9la"
curl -k https://myapp.local:30540
```

---

## 🔐 How cert-manager Works

```id="c0s8pq"
Ingress detects TLS block
        ↓
cert-manager reads annotation
        ↓
ClusterIssuer issues certificate
        ↓
Certificate stored as Secret
        ↓
Ingress uses Secret automatically
```

---

## 🐞 Issues Faced & Fixes

### ❌ CRD error (latest version)

✔ Cause: Kubernetes version incompatibility
✔ Fix: Used compatible version:

```id="j2k3la"
v1.12.3
```

---

### ❌ HTTPS not working

✔ Cause: Using HTTP port instead of HTTPS NodePort
✔ Fix:

```id="y7s9dv"
Use 443 → NodePort (30540)
```

---

### ❌ 400 Bad Request

✔ Cause: HTTP request sent to HTTPS port
✔ Fix:

```id="l5r8km"
Use https:// protocol
```

---

### ❌ SSL verification error in curl

✔ Cause: Self-signed certificate
✔ Fix:

```id="x1q7dp"
curl -k https://...
```

---

### ❌ Command not found (URL in terminal)

✔ Cause: Trying to run URL as command
✔ Fix: Use browser or curl

---

## 🧠 Key Learnings

* cert-manager automates certificate lifecycle
* Difference between:

  * Manual TLS (Day 17)
  * Automated TLS (Day 18)
* Importance of:

  * ClusterIssuer
  * Ingress annotations
* TLS termination in Kubernetes
* Debugging HTTPS and certificate issues

---

## 🚀 Outcome

Successfully implemented **automatic TLS management** using cert-manager and integrated it with Kubernetes Ingress.

---

## ⚠️ Important Notes

* Certificates are **self-signed** (not trusted by browser)
* Requires:

  * `-k` flag in curl
  * Manual browser acceptance
* Domain (`myapp.local`) is locally mapped

---

## 🔥 Next Steps

* Day 19: Real Domain + Let’s Encrypt
* Trusted HTTPS (no browser warnings)
* Production-ready setup

---

## ⭐ Note

This setup was implemented on a **kubeadm-based Kubernetes cluster (AWS EC2)** using self-signed certificates for learning purposes.
