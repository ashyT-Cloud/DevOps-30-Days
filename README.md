# 🚀 DevOps 30 Days Challenge

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


### ✅ Day 14 - Kubernetes        --- Highlights
- Set up Kubernetes cluster using kubeadm
- Deployed Node.js app using Deployment
- Exposed application using NodePort
- Debugged real issues:
  .  kubeadm installation errors
  .  Repository issues
  .  Pod scheduling (taints)
  .  kubectl connectivity


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


## 🔥 Goal
Become job-ready DevOps Engineer
