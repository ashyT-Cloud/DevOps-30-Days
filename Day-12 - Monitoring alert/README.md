# 🚨 Day 12 – Alerting with Prometheus & Alertmanager

## 🚀 Overview

Implemented alerting on top of the monitoring stack using Prometheus and Alertmanager to notify when system or container metrics exceed defined thresholds.

---

## 🧠 Architecture

cAdvisor → Prometheus → Alertmanager → Email Notification

---

## ⚙️ Tools Used

* Prometheus
* Alertmanager
* Docker
* cAdvisor
* AWS EC2

---

## 🔧 Setup Steps

### 1. Installed Alertmanager

Downloaded and configured Alertmanager on EC2.

---

### 2. Configured Email Alerts

Configured `alertmanager.yml` with Gmail SMTP:

```yaml
global:
  smtp_smarthost: 'smtp.gmail.com:587'
  smtp_from: 'your_email@gmail.com'
  smtp_auth_username: 'your_email@gmail.com'
  smtp_auth_password: 'your_app_password'
```

---

### 3. Created Alert Rules

```yaml
groups:
  - name: container-alerts
    rules:
      - alert: HighCPUUsage
        expr: rate(container_cpu_usage_seconds_total[1m]) > 0.05
        for: 1m
```

---

### 4. Linked Alertmanager with Prometheus

Configured Prometheus to send alerts to Alertmanager.

---

### 5. Triggered Alert

Used stress container:

```bash
docker run -d polinux/stress stress --cpu 1
```

---

## 🚨 Alert Trigger

* Condition: High CPU usage
* Result: Alert fired in Prometheus and Alertmanager
* Notification: Email alert received

---

## 💥 Challenges Faced

* Docker image compatibility issues
* Alertmanager permission errors
* SMTP authentication setup

---

## 🎯 Key Learnings

* Alert lifecycle (Inactive → Pending → Firing)
* Prometheus rule evaluation
* Alertmanager routing and notification
* Real-time incident detection

---

## 🔥 Real-World Skills Gained

* Monitoring + Alerting integration
* Incident response basics
* Observability concepts

---

## 🚀 Next Step

Integrate monitoring and alerting with CI/CD pipelines
