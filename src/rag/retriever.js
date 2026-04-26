import { getEmbedding } from "./embedder.js";
import { getIndex } from "./indexManager.js";

export async function retrieve(query, k = 2) {
  const { index, metadata } = getIndex();

  const embedding = await getEmbedding(query);

  const result = index.search(embedding, k);

  const contexts = result.labels.map(i => metadata[i]);

  return contexts;
}