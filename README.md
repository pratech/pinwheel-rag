# 🤖 Pinwheel RAG – Robotics Teaching & Troubleshooting Assistant

---

## 🚀 Overview

Pinwheel RAG is an AI-powered backend system designed to assist **teachers and students in robotics learning and troubleshooting**.

It combines:

* Retrieval-Augmented Generation (RAG)
* Structured robotics knowledge
* Controlled LLM responses
* Interactive troubleshooting flows

---

## 🧠 What It Does

### ✅ Semantic Search (RAG)

* Finds relevant robotics issues using embeddings
* Handles flexible queries

---

### ✅ AI Response Generation

* Uses LLM with strict grounding
* Prevents hallucination
* Produces structured, step-based answers

---

### ✅ Troubleshooting Mode

* Detects hardware issues
* Guides users via step-by-step diagnostic questions
* Maintains session state

---

## 🏗️ Updated Architecture


Frontend (Browser / test.html)
        ↓
ngrok (Public URL Tunnel)
        ↓
Local Node.js Server (Express API)
        ↓
Intent Detection
        ↓
├── Troubleshooting Flow Engine
│        ↓
│    Step-by-step guided debugging
│
└── RAG Pipeline
         ↓
     Embedding (OpenAI)
         ↓
     FAISS Vector Search
         ↓
     Top Context Retrieval
         ↓
     LLM Response Generation

---

## 🔄 Data Flow

User Input (Browser UI)
        ↓
HTTP POST /chat (via ngrok)
        ↓
Node.js Server (server.js)
        ↓
Check Session State
        ↓
Intent Detection

IF troubleshooting:
    → Ask next question / return solution

ELSE:
    → Retrieve relevant data (RAG)
    → Generate response (LLM)

        ↓
JSON Response
        ↓
Frontend displays output

---

## 📂 Project Structure


pinwheel-rag/
├── server.js              # Express API server
├── data/                  # Knowledge base
├── scripts/
│   └── buildIndex.js      # Builds FAISS index
├── src/
│   ├── rag/               # Retrieval pipeline
│   ├── llm/               # OpenAI integration
│   ├── troubleshooting/   # Flow engine
├── test.html              # Simple frontend for testing API
├── .env
├── package.json


---

## ⚙️ Setup & Run

### 1. Install dependencies

```bash
npm install

---

### 2. Start backend server

```bash
node server.js
```

---

### 3. Start ngrok tunnel

```bash
ngrok http 3000
```

---

### 4. Update test.html

Replace API URL with:

```text
https://your-ngrok-url/chat
```

---

### 5. Run frontend test

```bash
npx serve
```

Open browser:

```
http://localhost:<port>
```

Click **"Test Robot API"**

---

## 🧪 Testing

### Example Request

```json
{
  "message": "My robot is not moving",
  "sessionId": "test123"
}
```

---

### Example Response

```json
{
  "reply": "Is the battery connected and powered ON?"
}
```

---

## ⚠️ Current Limitations

* ngrok URL changes on restart
* FAISS is in-memory (not persistent)
* Basic UI (test.html only)
* Rule-based intent detection

---

## 🔮 Next Steps

### 🚀 High Priority

* [ ] Build full chat UI (message history, input box)
* [ ] Add yes/no buttons for troubleshooting
* [ ] Improve intent detection (LLM-based)

---

### 🧠 Backend Improvements

* [ ] Persistent vector DB (Pinecone / Supabase)
* [ ] Multi-turn conversation memory
* [ ] Better context ranking

---

### 🌐 Deployment

* [ ] Move backend to AWS / Railway
* [ ] Connect frontend (Vercel)
* [ ] Add API authentication

---

## 💡 Vision

To create a **scalable robotics assistant** that:

* Helps teachers conduct classes
* Guides students in debugging hardware
* Acts as an AI mentor for robotics learning

---

## 👨‍💻 Author

Built under **Pinwheel Robotics initiative**
Focused on hands-on STEM education and AI integration.

---
