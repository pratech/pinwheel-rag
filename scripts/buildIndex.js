import fs from "fs";
import { getEmbedding } from "../src/rag/embedder.js";
//import { createIndex, saveIndex } from "../src/rag/indexManager.js";
import faiss from "faiss-node";
import { setIndex } from "../src/rag/indexManager.js";

const data = JSON.parse(fs.readFileSync("data/knowledge.json"));

export async function buildIndex() {
  //const index = createIndex();
  const index = new faiss.IndexFlatL2(1536);
  const metadata = [];

  const vectors = [];

  for (let item of data) {
   console.log("Processing:", item.problem);

   const combinedText =`
Problem: ${item.problem}
Keywords: ${item.keywords.join(", ")}
Solution: ${item.solution}`;

const embedding = await getEmbedding(combinedText);
    if (!embedding || embedding.length !== 1536) {
    throw new Error("Invalid embedding size");
  }

    vectors.push(embedding);
    metadata.push(item);
  }

 // Flatten vectors

const flatVectors = vectors.flat();
console.log("Vector length:", vectors[0].length);
console.log("Total vectors:", vectors.length);
// Convert to Float32Array
//const floatArray = new Float32Array(flatVectors);

index.add(flatVectors);

  //saveIndex(index, metadata);

 setIndex(index, metadata);

console.log("✅ Index built and loaded in memory");
}