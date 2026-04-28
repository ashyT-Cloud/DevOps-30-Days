# Day 19 – HTTPS with Let’s Encrypt (cert-manager)

## 🚀 Objective

Secure Kubernetes application using HTTPS with Let's Encrypt and cert-manager.

---

## 🏗️ Architecture

User → HTTPS → Ingress → Service → Pod

---

## ⚙️ Setup Steps

### 1. Install Ingress Controller

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml
```

### 2. Install cert-manager

```bash
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.12.3/cert-manager.yaml
```

### 3. Create ClusterIssuer

```yaml
letsencrypt-issuer.yml
```

### 4. Deploy Application

```yaml
deployment.yml
service.yml
```

### 5. Configure Ingress with TLS

```yaml
ingress.yml
```

### 6. Create Certificate

```yaml
certificate.yml
```

---

## 🔍 Verification

```bash
kubectl get certificate
kubectl get challenges
kubectl get ingress
```

---

## 🌐 Access

https://<EC2-IP>.nip.io

---

## 🎉 Result

* HTTPS enabled
* Valid SSL certificate
* Auto-renewal via cert-manager

---

## 🧠 Key Learnings

* cert-manager workflow (Certificate → Order → Challenge)
* ACME HTTP-01 validation
* Debugging real-world TLS issues
* Importance of ClusterIssuer readiness
