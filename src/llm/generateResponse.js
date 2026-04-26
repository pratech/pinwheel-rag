import { openai } from "./openaiClient.js";

export async function generateResponse(query, contexts) {
  // Convert structured context into readable format
  const contextText = contexts.map((c, i) => {
    return `
Problem ${i + 1}: ${c.problem}
Solution: ${c.solution}
`;
  }).join("\n");

  const messages = [
    {
      role: "system",
      content: `
You are a robotics teaching assistant.

STRICT RULES:
- Use ONLY the provided context.
- DO NOT add any new steps not present in context.
- DO NOT assume anything beyond given data.

If information is insufficient, say:
"I am not sure based on available data. Please provide more details."

Format output as:

Problem:
<problem>

Steps:
1. ...
2. ...

Keep it clear and concise for teachers.
`
    },
    {
      role: "user",
      content: `
User problem: ${query}

Context:
${contextText}
`
    }
  ];

  // 🔍 Debug (important)
  console.log("\n🧠 FINAL PROMPT TO LLM:\n", messages);

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
    temperature: 0.3
  });

  return response.choices[0].message.content;
}