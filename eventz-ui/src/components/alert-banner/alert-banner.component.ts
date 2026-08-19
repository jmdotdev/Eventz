import { Component, computed, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCircleAlert, lucideInfo } from '@ng-icons/lucide';

export type AlertTone = 'success' | 'error' | 'info' | 'warning';

@Component({
  selector: 'app-alert-banner',
  standalone: true,
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideCheck, lucideCircleAlert, lucideInfo })],
  templateUrl: './alert-banner.component.html',
})
export class AlertBannerComponent {
  @Input() tone: AlertTone = 'info';
  @Input() title = '';
  @Input() message = '';
  /** Dark, floating toast card vs. the flatter inline banner used inside forms/pages. */
  @Input() variant: 'toast' | 'inline' = 'inline';

  readonly icon = computed(() => (this.tone === 'success' ? 'lucideCheck' : this.tone === 'error' || this.tone === 'warning' ? 'lucideCircleAlert' : 'lucideInfo'));

  readonly badgeClasses = computed(() => {
    if (this.variant === 'toast') return 'bg-success-text';
    if (this.tone === 'success') return 'bg-success-text';
    if (this.tone === 'error') return 'bg-error';
    if (this.tone === 'warning') return 'bg-warning-text';
    return 'bg-brand';
  });

  readonly containerClasses = computed(() => {
    if (this.variant === 'toast') {
      return 'flex items-center gap-3 rounded-[14px] bg-dark-surface px-[17px] py-[15px] text-white shadow-toast';
    }
    if (this.tone === 'success') return 'flex items-center gap-3 rounded-[14px] border border-brand-border-light bg-success-bg px-4 py-3.5';
    if (this.tone === 'error') return 'flex items-center gap-3 rounded-[14px] border border-error-border bg-error-bg-soft px-4 py-3.5';
    if (this.tone === 'warning') return 'flex flex-wrap items-center gap-3 rounded-[13px] border border-warning-border bg-warning-bg-soft px-4 py-3.5';
    return 'flex items-center gap-3 rounded-[14px] border border-brand-border-light bg-brand-tint px-4 py-3.5';
  });

  readonly titleClasses = computed(() => {
    if (this.variant === 'toast') return 'block text-[13.5px] font-bold';
    if (this.tone === 'success') return 'block text-[14px] font-bold text-success-text';
    if (this.tone === 'error') return 'block text-[14px] font-bold text-error-text';
    if (this.tone === 'warning') return 'block text-[14px] font-bold text-warning-text';
    return 'block text-[14px] font-bold text-brand-hover';
  });

  readonly messageClasses = computed(() => {
    if (this.variant === 'toast') return 'text-[12.5px] text-text-inverted-muted';
    if (this.tone === 'success') return 'text-[13.5px] text-success-text';
    if (this.tone === 'error') return 'text-[13.5px] text-error-text';
    if (this.tone === 'warning') return 'text-[13.5px] text-warning-text';
    return 'text-[13.5px] text-brand-hover';
  });
}
