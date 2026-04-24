# 🚀 Day 17 - HTTPS (TLS) with Kubernetes Ingress

## 📌 Objective

Secure the application using HTTPS by configuring TLS in Kubernetes Ingress.

---

## 🏗️ Architecture

```
Browser (HTTPS)
        ↓
Ingress Controller (NGINX - TLS Termination)
        ↓
Kubernetes Service (HTTP)
        ↓
Pods (Node.js App)
```

---

## ⚙️ What I Did

### 1. Generated Self-Signed TLS Certificate

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
-keyout tls.key -out tls.crt \
-subj "/CN=myapp.local/O=myapp.local"
```

---

### 2. Created Kubernetes TLS Secret

```bash
kubectl create secret tls my-tls-secret \
--key tls.key \
--cert tls.crt
```

---

### 3. Updated Ingress Configuration

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: node-ingress
spec:
  ingressClassName: nginx

  tls:
  - hosts:
    - myapp.local
    secretName: my-tls-secret

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

### 4. Applied Configuration

```bash
kubectl apply -f ingress-tls.yml
```

---

### 5. Accessed Application via HTTPS

```
https://myapp.local:<NodePort>
```

Example:

```
https://myapp.local:30540
```

---

## ⚠️ Important Notes

* Using **NodePort**, so HTTPS runs on custom port (not 443)
* Browser shows security warning (self-signed certificate)
* Must click **Advanced → Proceed**

---

## 🐞 Issues Faced & Fixes

### ❌ 400 Bad Request

✔ Cause: HTTP request sent to HTTPS port
✔ Fix: Used correct protocol:

```
https://
```

---

### ❌ HTTPS not working

✔ Cause: Wrong port (used HTTP port instead of HTTPS NodePort)
✔ Fix: Used correct port:

```
443 → NodePort (30540)
```

---

### ❌ Different behavior in browsers

✔ Cause:

* SSL cache
* Host mismatch
* Self-signed certificate

✔ Fix:

* Used incognito mode
* Cleared browser cache
* Used correct domain (`myapp.local`)

---

### ❌ Host mismatch issue

✔ Cause: Accessing via IP instead of domain
✔ Fix:

* Used `/etc/hosts` mapping

```
127.0.0.1 myapp.local
```

---

## 🧠 Key Learnings

* HTTPS works via **TLS termination at Ingress**
* Difference between:

  * HTTP vs HTTPS ports
  * NodePort mapping
* Importance of:

  * Correct protocol (`https://`)
  * Correct Host header
* Browser behavior with self-signed certificates
* Real-world debugging of TLS and networking issues

---

## 🚀 Outcome

Successfully secured the application using HTTPS with Kubernetes Ingress and understood real-world TLS behavior.

---

## 🔥 Next Steps

* Day 18: cert-manager (Auto SSL)
* Real domain + Let’s Encrypt
* Production-grade HTTPS setup

---

## ⭐ Note

This setup uses a **self-signed certificate on a kubeadm-based Kubernetes cluster (AWS EC2)** for learning purposes.
