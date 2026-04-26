# 🤖 Pinwheel RAG – Robotics Teaching & Troubleshooting Assistant

## 🚀 Overview

Pinwheel RAG is a backend-first AI system designed to assist **teachers and students in robotics learning and troubleshooting**.

It combines:

* Retrieval-Augmented Generation (RAG)
* Structured robotics knowledge
* Controlled LLM responses
* Rule-based + AI-driven troubleshooting

The goal is to build a **reliable, classroom-ready robotics assistant** that can:

* Explain concepts
* Troubleshoot hardware issues
* Guide step-by-step debugging

---

## 🧠 What It Does

### ✅ 1. Semantic Knowledge Retrieval (RAG)

* Uses embeddings to understand user queries
* Retrieves the most relevant robotics problem/solution
* Works even with varied phrasing (e.g., “robot not moving” → “motor issue”)

---

### ✅ 2. Controlled AI Responses

* Uses LLM only with retrieved context
* Prevents hallucination with strict prompt rules
* Generates structured, teacher-friendly output

---

### ✅ 3. Troubleshooting Mode (Decision Flow)

* Detects hardware issues (e.g., “not working”)
* Switches to interactive debugging mode
* Asks step-by-step diagnostic questions
* Provides deterministic fixes

---

### ✅ 4. Hybrid Intelligence

* Flow-based logic → reliable debugging
* RAG + LLM → flexible reasoning

---

## 🏗️ Architecture

```
User Query
   ↓
Intent Detection
   ↓
├── Troubleshooting Flow (if issue detected)
│      ↓
│   Step-by-step guided debugging
│
└── RAG Pipeline (default)
       ↓
   Embedding (OpenAI)
       ↓
   FAISS Vector Search
       ↓
   Top-K Context Retrieval
       ↓
   LLM (grounded response)
       ↓
   Structured Answer
```

---

## 📂 Project Structure

```
pinwheel-rag/
├── data/                  # Knowledge base (robotics issues)
├── scripts/               # Build + test scripts
│   ├── buildIndex.js
│   ├── runTest.js
├── src/
│   ├── rag/               # RAG pipeline
│   │   ├── embedder.js
│   │   ├── retriever.js
│   │   ├── indexManager.js
│   ├── llm/               # LLM integration
│   │   ├── openaiClient.js
│   │   ├── generateResponse.js
│   ├── troubleshooting/   # Decision flow engine
│   │   ├── flows.js
│   │   ├── engine.js
│   │   ├── detect.js
├── .env
├── package.json
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd pinwheel-rag
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Add Environment Variables

Create `.env` file:

```env
OPENAI_API_KEY=your_api_key_here
```

---

### 4. Add Knowledge Base

Edit:

```
data/knowledge.json
```

Example:

```json
[
  {
    "id": 1,
    "problem": "Robot not moving",
    "keywords": ["motor not working", "wheels not rotating"],
    "solution": "Check battery voltage and verify L298N connections."
  }
]
```

---

## ▶️ Run & Test

### Run Full System

```bash
node scripts/runTest.js
```

---

### Example Flow

#### Input:

```
My robot is not moving
```

#### Output:

* Either:

  * Troubleshooting mode (interactive)
* Or:

  * AI-generated structured solution

---

## 🧪 Current Capabilities

* ✔ Embedding-based semantic search
* ✔ FAISS vector retrieval (in-memory)
* ✔ Structured robotics knowledge
* ✔ Grounded LLM responses (no hallucination)
* ✔ Intent-based troubleshooting mode
* ✔ CLI interaction for testing

---

## ⚠️ Limitations (Current)

* FAISS is in-memory (no persistence yet)
* Limited dataset (manual entries)
* Intent detection is rule-based
* Single-turn conversation (no memory)

---

## 🔮 Next Steps / Roadmap

### 🔥 High Priority

* [ ] Persistent vector database (Pinecone / FAISS disk)
* [ ] Improve intent detection (LLM-based)
* [ ] Add conversation memory

---

### 🧠 Intelligence Upgrades

* [ ] Adaptive troubleshooting (LLM-guided questions)
* [ ] Multi-step reasoning chains
* [ ] Context ranking improvements

---

### 🧑‍🏫 Education Features

* [ ] Teaching mode (concept explanations)
* [ ] Arduino code generation
* [ ] Lesson planning assistant

---

### 🌐 Productization

* [ ] Web UI (chat interface)
* [ ] API endpoints
* [ ] User session tracking
* [ ] Analytics dashboard

---

## 💡 Vision

To build a **scalable AI-powered robotics assistant** that can:

* Support teachers in classrooms
* Help students debug hardware
* Act as a digital robotics mentor

---

## 👨‍💻 Author

Built as part of **Pinwheel Robotics initiative**
Focused on practical STEM learning and innovation.

---
