import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-page-header',
  standalone: true,
  template: `
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <div>
        <p class="text-[26px] font-extrabold tracking-[-.03em] text-text-primary sm:text-[28px]">{{ title }}</p>
        @if (subtitle) {
          <p class="mt-1 text-[15px] text-text-secondary">{{ subtitle }}</p>
        }
      </div>
      <div class="flex flex-wrap gap-2.5">
        <ng-content />
      </div>
    </div>
  `,
})
export class PageHeaderComponent {
  @Input({ required: true }) title = '';
  @Input() subtitle = '';
}
