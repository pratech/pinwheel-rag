import { flows } from "./flows.js";

export function startFlow(flowName) {
  const flow = flows[flowName];
    if (!flow) {
    return {
      error: true,
      message: "Flow not found"
    };
  }
  const firstNode = flow.nodes[flow.start];

  return {
    current: flow.start,
    message: firstNode.question
  };
}

export function nextStep(flowName, currentNode, answer) {
  const flow = flows[flowName];
   if (!flow) {
    return {
      done: true,
      message: "No troubleshooting flow available."
    };
  }

  const node = flow.nodes[currentNode];
   if (!node) {
    return {
      done: true,
      message: "Invalid step in troubleshooting flow."
    };
  }


  const nextKey = node.options?.[answer];
   if (!nextKey) {
    return {
      done: false,
      current: currentNode,
      message: "Please answer with valid option (yes/no)."
    };
  }

  const nextNode = flow.nodes[nextKey];
  if (!nextNode) {
    return {
      done: true,
      message: "Troubleshooting complete or flow not defined properly."
    };
  }


  if (nextNode.solution) {
    return {
      done: true,
      message: nextNode.solution
    };
  }

  return {
    done: false,
    current: nextKey,
    message: nextNode.question
  };
}