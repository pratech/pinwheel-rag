import { flows } from "./flows.js";

export function startFlow(flowName) {
  const flow = flows[flowName];
  const firstNode = flow.nodes[flow.start];

  return {
    current: flow.start,
    message: firstNode.question
  };
}

export function nextStep(flowName, currentNode, answer) {
  const flow = flows[flowName];
  const node = flow.nodes[currentNode];

  const nextKey = node.options[answer];

  const nextNode = flow.nodes[nextKey];

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