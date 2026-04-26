import express from "express";
import cors from "cors";

import { buildIndex } from "./scripts/buildIndex.js";
import { retrieve } from "./src/rag/retriever.js";
import { generateResponse } from "./src/llm/generateResponse.js";
import { detectIntent } from "./src/troubleshooting/detect.js";
import { startFlow, nextStep } from "./src/troubleshooting/engine.js";

const app = express();
app.use(cors());
app.use(express.json());

let initialized = false;

// store session state (simple version)
let sessions = {};

app.post("/chat", async (req, res) => {
  const { message, sessionId } = req.body;

  if (!initialized) {
    console.log("🔧 Building index...");
    await buildIndex();
    initialized = true;
  }

  const session = sessions[sessionId] || {};

  // 🔧 If already in troubleshooting flow
  if (session.flow) {
    const result = nextStep(session.flow, session.current, message.toLowerCase());

    if (result.done) {
      delete sessions[sessionId];
      return res.json({ reply: result.message });
    } else {
      sessions[sessionId] = {
        flow: session.flow,
        current: result.current
      };
      return res.json({ reply: result.message });
    }
  }

  // 🔍 Detect new intent
  const intent = detectIntent(message);

  if (intent) {
    const flow = startFlow(intent);

    sessions[sessionId] = {
      flow: intent,
      current: flow.current
    };

    return res.json({ reply: flow.message });
  }

  // 🧠 RAG mode
  const contexts = await retrieve(message);
  const answer = await generateResponse(message, contexts);

  res.json({ reply: answer });
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});