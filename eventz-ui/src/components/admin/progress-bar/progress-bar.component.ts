import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-admin-progress-bar',
  standalone: true,
  template: `
    <div class="h-[5px] w-full rounded-[3px] bg-brand-tint">
      <div class="h-full rounded-[3px]" [class]="full() ? 'bg-dark-surface' : 'bg-brand'" [style.width.%]="pct()"></div>
    </div>
  `,
})
export class ProgressBarComponent {
  readonly value = input.required<number>();
  readonly max = input.required<number>();

  readonly pct = computed(() => (this.max() > 0 ? Math.min(100, (this.value() / this.max()) * 100) : 0));
  readonly full = computed(() => this.pct() >= 100);
}
