export function detectIntent(query) {
  const q = query.toLowerCase();

  if (
     q.includes("not moving") ||
    q.includes("not working") ||
    q.includes("not rotating") ||
    q.includes("not responding") ||
    q.includes("problem") ||
    q.includes("issue") ||
    q.includes("error")
  ) {
    return "robot_not_moving";
  }

  return null;
}