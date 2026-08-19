import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-period-selector',
  standalone: true,
  template: `
    <div class="flex gap-1 rounded-[11px] bg-brand-tint p-1">
      @for (period of periods; track period) {
        <button
          type="button"
          (click)="periodChange.emit(period)"
          class="rounded-lg px-3 py-1.5 text-[13px] font-bold transition-colors"
          [class]="active === period ? 'bg-white text-brand shadow-sm' : 'text-text-secondary'"
        >{{ period }}</button>
      }
    </div>
  `,
})
export class PeriodSelectorComponent {
  @Input() periods: string[] = ['7d', '30d', '3m', '1y'];
  @Input() active = '30d';
  @Output() periodChange = new EventEmitter<string>();
}
