# 🚀 Day 28 - Kubernetes Persistent Storage

## 🎯 Objective

Learn how to persist data in Kubernetes using Persistent Volumes (PV) and Persistent Volume Claims (PVC).

---

## 🧱 Architecture

Pod ↔ PVC ↔ PV ↔ Storage

---

## ⚙️ Steps Performed

### 1. Created Persistent Volume

* Configured 1Gi storage using hostPath

### 2. Created Persistent Volume Claim

* Requested 500Mi storage from Kubernetes

### 3. Attached Storage to Pod

* Mounted PVC inside Nginx container

### 4. Tested Persistence

* Created data inside mounted volume
* Deleted pod
* Recreated pod
* Verified data survived restart

---

## 📄 Files Used

* pv.yaml
* pvc.yaml
* pod.yaml

---

## 🧠 Key Learnings

* Containers are ephemeral
* Persistent Volumes provide durable storage
* PVC acts as a storage request abstraction
* Data can survive pod restarts and recreation

---

## 🔥 Interview Summary

“I implemented Persistent Volumes and Persistent Volume Claims in Kubernetes to provide persistent storage for containerized workloads.”

---

## 📌 Future Scope

* Dynamic Provisioning
* Storage Classes
* StatefulSets
* Cloud Storage Integration (EBS, EFS)
