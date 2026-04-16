# 📊 Day 10 - Monitoring with Prometheus & Grafana

## 🚀 Overview

On Day 10, I implemented a complete monitoring stack using Prometheus, Node Exporter, and Grafana on an AWS EC2 instance.

---

## 🧠 Architecture

Node Exporter → Prometheus → Grafana

* Node Exporter exposes system metrics
* Prometheus collects and stores metrics
* Grafana visualizes data using dashboards

---

## ⚙️ Tools Used

* Prometheus
* Node Exporter
* Grafana
* AWS EC2 (Ubuntu)
* Linux commands

---

## 🔧 Setup Steps

### 1. Node Exporter

* Installed and ran Node Exporter
* Verified metrics at:
  http://<EC2-IP>:9100/metrics

---

### 2. Prometheus

* Installed Prometheus
* Configured `prometheus.yml` to scrape Node Exporter:

```yaml
scrape_configs:
  - job_name: "node_exporter"
    static_configs:
      - targets: ["127.0.0.1:9100"]
```

* Verified targets status (UP)

---

### 3. Grafana

* Installed Grafana using official repository
* Logged in and configured Prometheus as data source
* Imported dashboard using ID: 1860

---

## 📊 Dashboard Metrics

* CPU Usage
* Memory Usage
* Disk Usage
* Network Activity

---

## 💥 Challenges Faced & Fixes

### ❌ Node Exporter not reachable

* Fixed by running service properly and verifying port 9100

### ❌ Prometheus target DOWN

* Fixed configuration and ensured Node Exporter was running

### ❌ Grafana installation issue

* Resolved GPG key error using proper key import method

### ❌ Login issue in Grafana

* Resolved using password reset and clearing browser cache

---

## 🎯 Key Learnings

* Monitoring pipeline setup from scratch
* Debugging service connectivity issues
* Importance of logs and metrics
* Understanding of real-world observability systems

---

## 🔥 Real-World Skills Gained

* Prometheus configuration and troubleshooting
* Grafana dashboard creation
* System-level monitoring
* Debugging production-like issues

---

## 🚀 Next Step

Implement alerting and monitor containerized applications (Docker/Kubernetes)
