const GRADIENTS: [string, string][] = [
  ['#2E1065', '#7C3AED'],
  ['#4C0519', '#E11D48'],
  ['#052E3A', '#0891B2'],
  ['#422006', '#F59E0B'],
  ['#3F1D0B', '#EA580C'],
  ['#052E16', '#16A34A'],
  ['#1E1B4B', '#6366F1'],
];

export function hashGradient(seed: string): [string, string] {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return GRADIENTS[hash % GRADIENTS.length];
}
