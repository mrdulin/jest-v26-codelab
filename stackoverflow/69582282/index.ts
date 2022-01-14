type anyFunction = (...args: any[]) => any;

let i = 0;
const idMap = new Map<number, ReturnType<typeof requestAnimationFrame>>();

function cleanup(id: number) {
  idMap.delete(id);
}

export function createRAF(callback: anyFunction, delayFrames = 1): number {
  const id = i++;
  function callRaf(leftFrames: number) {
    if (leftFrames === 0) {
      cleanup(id);
      callback();
      return;
    }

    // Call raf and bind real raf id with `idMap`.
    const realId = requestAnimationFrame(() => callRaf(leftFrames - 1));
    idMap.set(id, realId);
  }
  callRaf(delayFrames);
  return id;
}
