import { Component, computed, OnInit, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCalendar,
  lucideClock,
  lucideHeart,
  lucideLock,
  lucideMapPin,
  lucideShare2,
} from '@ng-icons/lucide';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { QuantityStepperComponent } from '../../components/quantity-stepper/quantity-stepper.component';
import { EventsService } from '../../services/events/events.service';
import { CheckoutStateService } from '../../services/checkout/checkout-state.service';
import { EventListing } from '../../interfaces/event.interface';
import { formatFullDate, formatKes, formatTime } from '../../utils/format';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, QuantityStepperComponent, NgIcon, NgTemplateOutlet],
  viewProviders: [provideIcons({ lucideCalendar, lucideClock, lucideMapPin, lucideShare2, lucideHeart, lucideLock })],
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {
  readonly event = signal<EventListing | null>(null);
  readonly quantities = signal<Record<string, number>>({});
  readonly saved = signal(false);

  readonly subtotal = computed(() => {
    const event = this.event();
    if (!event) return 0;
    const qty = this.quantities();
    return event.ticketTiers.reduce((sum, tier) => sum + tier.price * (qty[tier.id] ?? 0), 0);
  });
  readonly fees = computed(() => Math.round(this.subtotal() * 0.06));
  readonly total = computed(() => this.subtotal() + this.fees());
  readonly ticketCount = computed(() => Object.values(this.quantities()).reduce((a, b) => a + b, 0));

  constructor(
    private eventsService: EventsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private checkoutState: CheckoutStateService,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.eventsService.getEventById(id).subscribe(event => {
      if (event) this.event.set(event);
    });
  }

  quantityFor(tierId: string): number {
    return this.quantities()[tierId] ?? 0;
  }

  setQuantity(tierId: string, qty: number): void {
    this.quantities.update(current => ({ ...current, [tierId]: Math.max(0, Math.min(10, qty)) }));
  }

  getTickets(): void {
    const event = this.event();
    if (!event || this.ticketCount() === 0) return;
    this.checkoutState.startCheckout(event, this.quantities());
    this.router.navigate(['/checkout']);
  }

  formatDate(iso: string): string {
    return formatFullDate(iso);
  }

  formatTimeOf(iso: string): string {
    return formatTime(iso);
  }

  formatPrice(amount: number): string {
    return formatKes(amount);
  }
}
