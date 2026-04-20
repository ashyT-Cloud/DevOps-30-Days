# 🔗 Day 13 – CI/CD + Monitoring + Alerting Integration

## 🚀 Overview

On Day 13, I integrated CI/CD with monitoring and alerting to build a complete DevOps pipeline. The system automatically deploys applications and continuously monitors them, triggering alerts in case of failures.

---

## 🧠 Architecture

GitHub → CI/CD Pipeline → Docker Container (EC2)
↓
cAdvisor + Node Exporter
↓
Prometheus
↓
Alertmanager → Email Alerts

---

## ⚙️ Tools Used

* GitHub Actions
* Docker
* Prometheus
* Alertmanager
* Grafana
* cAdvisor
* AWS EC2

---

## 🔧 Implementation Steps

### 1. Deployed Application Container

```bash
docker run -d --name my-app -p 4000:80 nginx
```

---

### 2. Monitored Container Metrics

Prometheus scrapes container metrics using cAdvisor.

---

### 3. Created Application Down Alert

```yaml
- alert: AppDown
  expr: absent(container_last_seen{name="my-app"})
  for: 1m
  labels:
    severity: critical
  annotations:
    summary: "Application container is down"
    description: "my-app container is not running"
```

---

### 4. Connected Alertmanager

Configured Alertmanager to send email notifications when alerts are triggered.

---

### 5. Simulated Failure

```bash
docker stop my-app
```

---

## 🚨 Result

* Prometheus detected container downtime
* Alert triggered (FIRING state)
* Alertmanager sent notification
* System successfully identified application failure

---

## 💥 Challenges Faced

* Prometheus config errors (YAML issues)
* Port conflicts
* Service persistence issues
* Alertmanager permission and configuration issues

---

## 🎯 Key Learnings

* End-to-end DevOps pipeline integration
* Real-time failure detection
* Alert lifecycle (Inactive → Pending → Firing → Resolved)
* Importance of monitoring in production systems

---

## 🔥 Real-World Skills Gained

* CI/CD + Monitoring integration
* Incident simulation and detection
* Observability architecture understanding
* Production-level debugging

---

## 🚀 Outcome

Built a complete DevOps workflow that not only deploys applications but also monitors and alerts on failures in real-time.
