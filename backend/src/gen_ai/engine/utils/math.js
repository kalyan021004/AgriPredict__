export function dot(a, b) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i] * b[i];
  return s;
}
export function norm(v) {
  return Math.sqrt(dot(v, v));
}
export function cosine(a, b) {
  return dot(a, b) / (norm(a) * norm(b) + 1e-12);
}
