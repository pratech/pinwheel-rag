import { openai } from "../llm/openaiClient.js";

const EMBEDDING_MODEL = "text-embedding-3-small";

export async function getEmbedding(text) {
  const response = await openai.embeddings.create({
    model: EMBEDDING_MODEL,
    input: text,
  });

  return response.data[0].embedding;
}