import { Component, computed, input } from '@angular/core';

interface QrCell {
  x: number;
  y: number;
}

const GRID = 25;
const FINDER_ORIGINS: [number, number][] = [
  [0, 0],
  [GRID - 7, 0],
  [0, GRID - 7],
];

function isFinderCell(x: number, y: number): boolean {
  return FINDER_ORIGINS.some(([ox, oy]) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7);
}

function finderIsDark(x: number, y: number): boolean {
  for (const [ox, oy] of FINDER_ORIGINS) {
    if (x >= ox && x < ox + 7 && y >= oy && y < oy + 7) {
      const rx = x - ox;
      const ry = y - oy;
      return rx === 0 || rx === 6 || ry === 0 || ry === 6 || (rx >= 2 && rx <= 4 && ry >= 2 && ry <= 4);
    }
  }
  return false;
}

function seedNumber(seed: string): number {
  let n = 0;
  for (let i = 0; i < seed.length; i++) n = (n * 31 + seed.charCodeAt(i)) >>> 0;
  return n;
}

function pseudoRandom(seedN: number, x: number, y: number): number {
  const n = Math.sin(seedN + x * 374761393 + y * 668265263) * 43758.5453;
  return n - Math.floor(n);
}

/** Decorative, deterministic QR-style placeholder — not a real scannable code. */
@Component({
  selector: 'app-qr-code',
  standalone: true,
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 25 25" shape-rendering="crispEdges">
      <rect width="25" height="25" fill="#fff" />
      @for (cell of cells(); track cell.x + '-' + cell.y) {
        <rect [attr.x]="cell.x" [attr.y]="cell.y" width="1" height="1" fill="#12121A" />
      }
    </svg>
  `,
})
export class QrCodeComponent {
  readonly seed = input('eventz');
  readonly size = input(96);

  readonly cells = computed<QrCell[]>(() => {
    const seedN = seedNumber(this.seed());
    const out: QrCell[] = [];
    for (let y = 0; y < GRID; y++) {
      for (let x = 0; x < GRID; x++) {
        if (isFinderCell(x, y)) {
          if (finderIsDark(x, y)) out.push({ x, y });
          continue;
        }
        if (pseudoRandom(seedN, x, y) > 0.52) out.push({ x, y });
      }
    }
    return out;
  });
}
