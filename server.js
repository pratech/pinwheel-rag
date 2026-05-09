import express from "express";
import cors from "cors";

import { buildIndex } from "./scripts/buildIndex.js";
import { retrieve } from "./src/rag/retriever.js";
import { generateResponse } from "./src/llm/generateResponse.js";
import { detectIntent } from "./src/troubleshooting/detect.js";
import { startFlow, nextStep } from "./src/troubleshooting/engine.js";

const app = express();
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// 🔥 Handle preflight explicitly
//app.options("*", cors());
app.use(express.json());

let initialized = false;

// store session state (simple version)
let sessions = {};

app.post("/chat", async (req, res) => {
  const { message, sessionId } = req.body;
    console.log("📩 Incoming request:", message);
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

  // 🔍 Detect intent
const intent = detectIntent(message);

// 🔎 Always run RAG
const results = await retrieve(message);
const topResult = results[0];

if (intent === "troubleshoot" && topResult) {

  const flowName = topResult.problem; // 🔥 KEY FIX

  const flow = startFlow(flowName);
  if (!flow || flow.error) {
    return res.json({
      reply: topResult.solution || "No troubleshooting flow available."
    });
  }


  sessions[sessionId] = {
    flow: flowName,
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