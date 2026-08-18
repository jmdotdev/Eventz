import { Injectable, computed, signal } from '@angular/core';
import { AttendeeInfo, EventListing } from '../../interfaces/event.interface';

export type CheckoutStep = 1 | 2 | 3 | 4;

const SERVICE_FEE_RATE = 0.06;

@Injectable({
  providedIn: 'root'
})
export class CheckoutStateService {
  readonly event = signal<EventListing | null>(null);
  readonly quantities = signal<Record<string, number>>({});
  readonly step = signal<CheckoutStep>(1);
  readonly attendees = signal<AttendeeInfo[]>([]);
  readonly orderId = signal<string | null>(null);

  readonly ticketCount = computed(() => Object.values(this.quantities()).reduce((sum, q) => sum + q, 0));

  readonly subtotal = computed(() => {
    const event = this.event();
    if (!event) return 0;
    const qty = this.quantities();
    return event.ticketTiers.reduce((sum, tier) => sum + tier.price * (qty[tier.id] ?? 0), 0);
  });

  readonly fees = computed(() => Math.round(this.subtotal() * SERVICE_FEE_RATE));
  readonly total = computed(() => this.subtotal() + this.fees());

  startCheckout(event: EventListing, quantities: Record<string, number>): void {
    this.event.set(event);
    this.quantities.set({ ...quantities });
    this.step.set(1);
  }

  setQuantity(tierId: string, qty: number): void {
    const clamped = Math.max(0, Math.min(10, qty));
    this.quantities.update(current => ({ ...current, [tierId]: clamped }));
  }

  goToStep(step: CheckoutStep): void {
    this.step.set(step);
  }

  setAttendees(attendees: AttendeeInfo[]): void {
    this.attendees.set(attendees);
  }

  confirmOrder(): string {
    const id = 'EVZ-' + Math.floor(80000 + Math.random() * 19999);
    this.orderId.set(id);
    return id;
  }

  reset(): void {
    this.event.set(null);
    this.quantities.set({});
    this.step.set(1);
    this.attendees.set([]);
    this.orderId.set(null);
  }
}
