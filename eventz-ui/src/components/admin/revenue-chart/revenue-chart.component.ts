import { Component, computed, input } from '@angular/core';

const WIDTH = 640;
const TOP = 20;
const BOTTOM = 190;

@Component({
  selector: 'app-admin-revenue-chart',
  standalone: true,
  templateUrl: './revenue-chart.component.html',
})
export class RevenueChartComponent {
  readonly data = input.required<number[]>();
  readonly labels = input<string[]>([]);

  private readonly points = computed(() => {
    const data = this.data();
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const n = data.length;
    return data.map((v, i) => ({
      x: n > 1 ? (i / (n - 1)) * (WIDTH - 20) + 10 : WIDTH / 2,
      y: BOTTOM - ((v - min) / range) * (BOTTOM - TOP),
    }));
  });

  readonly linePath = computed(() => this.points().map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' '));

  readonly areaPath = computed(() => {
    const pts = this.points();
    if (!pts.length) return '';
    const first = pts[0];
    const last = pts[pts.length - 1];
    return `M${first.x.toFixed(1)},${BOTTOM} ${this.linePath().slice(1)} L${last.x.toFixed(1)},${BOTTOM} Z`;
  });

  readonly endpoint = computed(() => this.points()[this.points().length - 1]);
}
