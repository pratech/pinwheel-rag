import { retrieve } from "../src/rag/retriever.js";

async function test() {
  const query = "My robot is not moving";

  const results = await retrieve(query);

  console.log("\n🔍 Query:", query);
  console.log("\n📚 Retrieved Results:\n");

  results.forEach((r, i) => {
    console.log(`${i + 1}. Problem: ${r.problem}`);
console.log(`   Solution: ${r.solution}\n`);
  });
}

test();