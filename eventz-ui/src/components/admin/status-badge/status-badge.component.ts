import { Component, computed, input } from '@angular/core';

const STATUS_STYLES: Record<string, string> = {
  // success/green
  published: 'bg-success-bg text-success-text',
  paid: 'bg-success-bg text-success-text',
  valid: 'bg-success-bg text-success-text',
  active: 'bg-success-bg text-success-text',
  'on sale': 'bg-success-bg text-success-text',
  // neutral/tint
  draft: 'bg-brand-tint text-text-secondary',
  closed: 'bg-brand-tint text-text-secondary',
  completed: 'bg-brand-tint text-text-secondary',
  expired: 'bg-border text-text-secondary',
  // dark
  'sold out': 'bg-dark-surface text-white',
  // error/red
  cancelled: 'bg-error-bg text-error-text',
  refunded: 'bg-error-bg text-error-text',
  failed: 'bg-error-bg text-error-text',
  // warning/amber
  pending: 'bg-warning-bg text-warning-text',
  transferred: 'bg-warning-bg text-warning-text',
  new: 'bg-warning-bg text-warning-text',
  // brand/purple
  'in transit': 'bg-brand-tint text-brand',
  'vip buyer': 'bg-brand-tint text-brand',
  repeat: 'bg-brand-tint text-brand',
};

@Component({
  selector: 'app-status-badge',
  standalone: true,
  template: `<span class="inline-block rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-[.02em]" [class]="classes()">{{ status() }}</span>`,
})
export class StatusBadgeComponent {
  readonly status = input.required<string>();

  readonly classes = computed(() => STATUS_STYLES[this.status().toLowerCase()] ?? 'bg-brand-tint text-text-secondary');
}
