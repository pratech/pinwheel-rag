# 📦 Dependencies & Local Setup Guide

This document lists all the required tools, software, and configurations needed to run the **Pinwheel RAG Robotics Assistant** locally.

---

## 🧠 Overview

To run the complete system, you need:

* Node.js environment
* API key (OpenAI)
* ngrok (for public access)
* Basic CLI tools

---

## 🔧 1. Core Requirements

### ✅ Node.js & npm

* Download: https://nodejs.org
* Recommended: **Node.js v18+**

Verify:

```bash
node -v
npm -v
```

---

### ✅ Git

* Download: https://git-scm.com

Verify:

```bash
git --version
```

---

## 🔐 2. Environment Variables

Create a `.env` file in the project root:

```env
OPENAI_API_KEY=your_api_key_here
```

---

## 🔑 3. OpenAI API Key

* Sign up: https://platform.openai.com
* Generate API key from dashboard

Used for:

* Embeddings (RAG)
* LLM responses

---

## 🌐 4. ngrok (Public URL Tunnel)

Used to expose your local backend to the internet.

### Installation:

* Download: https://ngrok.com/download
* Extract and place in a folder (e.g., `C:\ngrok`)

### Setup:

```bash
ngrok config add-authtoken YOUR_AUTH_TOKEN
```

### Run:

```bash
ngrok http 3000
```

---

## 📦 5. Node.js Dependencies

Install all required packages:

```bash
npm install
```

### Key packages used:

| Package    | Purpose                         |
| ---------- | ------------------------------- |
| openai     | LLM + embeddings                |
| faiss-node | Vector similarity search        |
| express    | Backend API server              |
| cors       | Enable cross-origin requests    |
| dotenv     | Environment variable management |

---

## 🖥️ 6. Optional: Static Server (Frontend Testing)

To run `test.html` locally:

### Option 1 (Recommended):

```bash
npx serve
```

### Option 2:

```bash
python -m http.server
```

---

## ▶️ 7. Full Run Sequence

Follow these steps to run the system end-to-end:

---

### Step 1: Start Backend Server

```bash
node server.js
```

---

### Step 2: Start ngrok (new terminal)

```bash
ngrok http 3000
```

Copy the generated URL:

```text
https://xxxx.ngrok.io
```

---

### Step 3: Update Frontend

In `test.html`, update API URL:

```javascript
fetch("https://xxxx.ngrok.io/chat", ...)
```

---

### Step 4: Start Frontend

```bash
npx serve
```

Open browser:

```text
http://localhost:<port>
```

---

### Step 5: Test System

Click:

```text
Test Robot API
```

---

## 🧪 Example Request

```json
{
  "message": "My robot is not moving",
  "sessionId": "test123"
}
```

---

## ⚠️ Notes & Tips

* ngrok URL changes on restart → update in frontend
* Backend must be running before API calls
* First API call may be slower (index build)
* Keep `.env` file secure (do not commit)

---

## 🧠 Recommended System Specs

* RAM: 8GB minimum (16GB recommended)
* OS: Windows / Mac / Linux
* Internet required for OpenAI API

---

## 🚀 Future Improvements

* Docker-based setup
* One-command startup script
* Cloud deployment (AWS / Railway)

---

## 🎯 Summary

With these dependencies installed, you can run:

* RAG pipeline
* LLM integration
* Troubleshooting engine
* Public API via ngrok
* Basic frontend testing

---
