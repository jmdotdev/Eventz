export function formatKes(amount: number): string {
  if (amount === 0) return 'Free';
  return 'KES ' + amount.toLocaleString('en-US');
}

const DAY_MONTH: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
const FULL_DATE: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
const TIME: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: '2-digit' };

export function formatEventDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', DAY_MONTH).toUpperCase();
}

export function formatFullDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', FULL_DATE);
}

export function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('en-US', TIME);
}
