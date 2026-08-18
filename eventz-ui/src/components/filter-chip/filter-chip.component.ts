import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-chip',
  standalone: true,
  template: `
    <button
      type="button"
      (click)="clicked.emit()"
      class="whitespace-nowrap rounded-full px-3.5 py-2 text-[13.5px] transition-colors"
      [class]="active ? 'border border-brand-border bg-brand-tint font-bold text-brand' : 'border border-border bg-white font-semibold text-text-nav hover:border-border-hover'"
    >
      <ng-content />
    </button>
  `,
})
export class FilterChipComponent {
  @Input() active = false;
  @Output() clicked = new EventEmitter<void>();
}
