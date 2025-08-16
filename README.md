# 🐍 Snake Game

A **Simple Snake Game** built using **HTML, CSS, and JavaScript**, containerized with **Docker**.

---

## 📸 Screenshot


---

## 📦 Features

- Classic snake gameplay in the browser 🎮
- Lightweight, responsive, and easy to run locally or via Docker
- Simple and clean codebase for learning or customization

---

## 📂 Project Setup

### 🔻 Clone the Repository


## 📌 Clean Reinstall of Docker Compose on Amazon Linux / EC2

### 1️⃣ Remove old docker-compose if it exists:

```bash
sudo rm -f /usr/local/bin/docker-compose
```

### 2️⃣ Install Docker Compose V2 plugin:

If Docker is already installed:

```bash
sudo mkdir -p /usr/local/lib/docker/cli-plugins
sudo curl -SL https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
```

Check for the latest release [here](https://github.com/docker/compose/releases).

---

### 3️⃣ Verify installation:

```bash
docker compose version
```

Notice — with V2 it’s `docker compose` (space) not `docker-compose` (hyphen) anymore.

---


## 🐳 Docker Commands

### 📦 Build the Docker Image



### 📤 Push the Docker Image (optional)



### 📥 Pull the Docker Image

```

### 🚀 Run the Docker Container

---

## 🌐 Access the Game

Open your browser and visit:
[http://localhost/](http://localhost/)

**Platform-specific browser open commands:**

```bash
# Linux
xdg-open http://localhost/

# macOS
open http://localhost/

# Windows (Powershell)
start http://localhost/
```

---

## 📑 Docker Compose Commands

```bash
# Build and start the containers
docker-compose up --build

# Build and start in detached mode
sudo docker-compose up --build -d

# Stop the containers
docker-compose stop

# Stop and remove containers, networks, and volumes
docker-compose down
```

---



