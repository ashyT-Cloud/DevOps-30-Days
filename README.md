cd ~/DevOps-30-Days# 🚀 DevOps 30 Days Challenge

## 📅 Progress

- Day 1: Linux + Nginx
- Day 2: Reverse Proxy
- Day 3: Docker
- Day 4: Docker Compose
- Day 5: CI/CD with GitHub Actions
- ### ✅ Day 6: Continuous Deployment (EC2)

* Automated deployment using GitHub Actions
* SSH-based deployment to EC2
* Docker container auto-updated on every push
* Live application hosted on AWS EC2

- ### ✅ Day 7: Nginx Reverse Proxy

* Configured Nginx as reverse proxy
* Removed direct port exposure (3000)
* Application accessible via port 80
* Improved production readiness

- Day 8: HTTPS (Concept + Self-Signed SSL)

## ✅ Day 9 - Monitoring & Debugging
- System monitoring using Linux tools
- Nginx service monitoring
- Log analysis
- Break & fix real-world scenarios
- Debugged reverse proxy failure (port 3000 issue)

✅ Day 10 – Prometheus + Grafana

Built full monitoring stack with dashboards

### ✅ Day 11 – Docker Monitoring (cAdvisor)

Extended monitoring to container level using cAdvisor.
Integrated container metrics with Prometheus and built custom Grafana dashboards using PromQL queries.

---

### ✅ Day 12 – Alerting with Prometheus & Alertmanager

Implemented alerting system to detect high CPU usage and trigger notifications via Alertmanager.
Simulated real-world incident using stress container and verified alert lifecycle (Pending → Firing).


### ✅ Day 13 – CI/CD + Monitoring + Alerting Integration

Integrated deployment pipeline with monitoring and alerting. Implemented application downtime detection and real-time alert triggering using Prometheus and Alertmanager.


### ✅ Day 14 - Kubernetes

- Set up Kubernetes cluster using kubeadm
- Deployed Node.js app using Deployment
- Exposed application using NodePort
- Debugged real issues:
  .  kubeadm installation errors
  .  Repository issues
  .  Pod scheduling (taints)
  .  kubectl connectivity

### Day 15 - CI/CD with Kubernetes

- Day 18 Highlights
- Installed cert-manager for automated certificate management
- Created ClusterIssuer for self-signed certificates
- Integrated cert-manager with Kubernetes Ingress
- Automated TLS certificate creation and usage
- Verified HTTPS using NodePort and domain mapping

### Day 16 Highlights

- Installed NGINX Ingress Controller
- Configured Ingress resource for routing
- Implemented:
- Host-based routing (myapp.local)
- Catch-all routing (no host)
Accessed application using:

http://<EC2-IP>:<NodePort>

Understood traffic flow:

Browser → Ingress → Service → Pod

### Day 17 – HTTPS (TLS)

- Implemented manual TLS setup using self-signed certificates
- Configured Ingress for HTTPS
- Understood:
  . TLS termination
  . HTTP vs HTTPS ports
  . Browser certificate behavior

### Day 18 -  cert-manager (Auto TLS)

- Installed cert-manager for automated certificate management
- Created ClusterIssuer for self-signed certificates
- Integrated cert-manager with Kubernetes Ingress
- Automated TLS certificate creation and usage
- Verified HTTPS using NodePort and domain mapping

--- Day 19: Implemented HTTPS using cert-manager and Let's Encrypt.
 Secured Kubernetes application with valid SSL certificate and automatic renewal.

### ## 🚀 Day 20 - Production Setup

### 🔧 What I Built

* Configured **Nginx as a reverse proxy**
* Deployed Node.js app using **PM2 (process manager)**
* Exposed application on **port 80 (no port in URL)**
* Enabled **auto-restart and persistence**

### 🧱 Architecture

User → Nginx (80) → Node App (3000 via PM2)

### 📁 Folder

`Day-20-production/`

### 🌐 Output

Application accessible via EC2 Public IP without specifying port

### 📌 Key Learnings

* Reverse Proxy (Nginx)
* Process Management (PM2)
* Production deployment basics
* Debugging real-world issues (ports, services)


## Day 21 - HTTPS Setup
- DuckDNS domain mapping
- SSL using Let's Encrypt
- Secure app over HTTPS

### ## 🚀 Day 22 - Kubernetes Basics

### 🔧 What I Built

* Set up a Kubernetes cluster using **Minikube**
* Deployed an application using **Deployment**
* Exposed it using **Service (NodePort)**
* Accessed application using **port-forwarding**

### 🧱 Architecture

kubectl → Deployment → Pod → Service → Port Forward → Browser

### 📁 Folder

`Day-22-kubernetes/`

### 🌐 Output

Application accessible via:
http://<EC2-PUBLIC-IP>:8080

### 📌 Key Learnings

* Kubernetes core components (Pod, Deployment, Service)
* Cluster setup using Minikube
* Service exposure and networking basics
* Real-world debugging using kubectl

---


---


## 🔥 Goal
Become job-ready DevOps Engineer
