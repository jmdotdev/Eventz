import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-admin-capacity-donut',
  standalone: true,
  template: `
    <svg viewBox="0 0 42 42" class="h-[120px] w-[120px] shrink-0 -rotate-90">
      <circle cx="21" cy="21" r="15.9" fill="none" stroke="#F2F4FF" stroke-width="7" />
      <circle
        cx="21" cy="21" r="15.9" fill="none" stroke="#381DDB" stroke-width="7" stroke-linecap="round"
        [attr.stroke-dasharray]="dashArray()"
      />
    </svg>
  `,
})
export class CapacityDonutComponent {
  readonly percent = input.required<number>();

  readonly dashArray = computed(() => `${Math.max(0, Math.min(100, this.percent()))} 100`);
}
