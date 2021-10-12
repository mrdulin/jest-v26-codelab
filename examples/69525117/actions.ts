export function open(type, id) {
  return { type, payload: { id } };
}
