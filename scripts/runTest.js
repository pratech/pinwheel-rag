import { buildIndex } from "./buildIndex.js";
import { retrieve } from "../src/rag/retriever.js";
import { generateResponse } from "../src/llm/generateResponse.js";
import { detectIntent } from "../src/troubleshooting/detect.js";
import { startFlow, nextStep } from "../src/troubleshooting/engine.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function run() {
  await buildIndex();  // ✅ wait for index

   rl.question("Enter your problem: ", async (query) => {

    const intent = detectIntent(query);
    console.log("Detected Intent:", intent);
    // 🔥 TROUBLESHOOTING MODE
    if (intent) {
      console.log("\n🔧 Entering Troubleshooting Mode...\n");

      let state = startFlow(intent);
      console.log(state.message);

      const askNext = () => {
        rl.question("(yes/no): ", (answer) => {
          const result = nextStep(intent, state.current, answer);

          console.log("\n" + result.message);

          if (result.done) {
            rl.close();
          } else {
            state = result;
            askNext();
          }
        });
      };

      askNext();
      return
    }

 // 🧠 NORMAL RAG MODE
    else {
  //const query = "My robot is not moving";

  const results = await retrieve(query);
  const answer = await generateResponse(query, results);

    console.log("\n🤖 AI RESPONSE:\n");
    console.log(answer);

    //console.log("\n🔍 Query:", query);
    //console.log("\n📚 Retrieved Results:\n");
    //console.log("DEBUG RESULT:", results);
    //results.forEach((r, i) => {
    //console.log(`${i + 1}. Problem: ${r.problem}`);
    //console.log(`   Solution: ${r.solution}\n`);
     rl.close();
}
});
}

run();