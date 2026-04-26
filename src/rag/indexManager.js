let indexInstance = null;
let metadataInstance = null;

export function setIndex(index, metadata) {
  indexInstance = index;
  metadataInstance = metadata;
}

export function getIndex() {
  if (!indexInstance) {
    throw new Error("Index not initialized. Run buildIndex first.");
  }

  return { index: indexInstance, metadata: metadataInstance };
}