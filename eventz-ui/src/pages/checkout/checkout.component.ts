import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCheck,
  lucideChevronLeft,
  lucideCircleAlert,
  lucideDownload,
  lucideInfo,
  lucideLock,
  lucideShieldCheck,
} from '@ng-icons/lucide';
import { FooterComponent } from '../../components/footer/footer.component';
import { QuantityStepperComponent } from '../../components/quantity-stepper/quantity-stepper.component';
import { StepProgressComponent } from '../../components/step-progress/step-progress.component';
import { AlertBannerComponent } from '../../components/alert-banner/alert-banner.component';
import { QrCodeComponent } from '../../components/qr-code/qr-code.component';
import { CheckoutStateService } from '../../services/checkout/checkout-state.service';
import { formatKes } from '../../utils/format';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    FooterComponent,
    QuantityStepperComponent,
    StepProgressComponent,
    AlertBannerComponent,
    QrCodeComponent,
    ReactiveFormsModule,
    NgIcon,
  ],
  viewProviders: [
    provideIcons({ lucideLock, lucideCircleAlert, lucideInfo, lucideShieldCheck, lucideCheck, lucideDownload, lucideChevronLeft }),
  ],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  readonly state = inject(CheckoutStateService);

  readonly stepLabels = ['Select tickets', 'Attendee info', 'Payment', 'Confirmation'];

  readonly paymentMethod = signal<'mpesa' | 'card'>('mpesa');
  readonly paymentDeclined = signal(false);
  readonly attemptedCardPayment = signal(false);

  readonly attendeeForm = this.fb.group({
    attendees: this.fb.array<ReturnType<CheckoutComponent['buildAttendeeGroup']>>([]),
  });

  readonly formatPrice = formatKes;

  get attendees(): FormArray {
    return this.attendeeForm.get('attendees') as FormArray;
  }

  ngOnInit(): void {
    if (!this.state.event()) {
      this.router.navigate(['/']);
      return;
    }
    this.syncAttendeeForm();
  }

  private buildAttendeeGroup(index: number) {
    return this.fb.group({
      fullName: [index === 0 ? 'John Mwangi' : '', Validators.required],
      email: [index === 0 ? 'john.mwangi@gmail.com' : '', [Validators.required, Validators.email]],
      phone: [index === 0 ? '+254 712 345 678' : ''],
      idNumber: ['', Validators.required],
      sendToEmail: [true],
    });
  }

  private syncAttendeeForm(): void {
    const count = this.state.ticketCount();
    this.attendees.clear();
    for (let i = 0; i < count; i++) {
      this.attendees.push(this.buildAttendeeGroup(i));
    }
  }

  tierRemaining(tierId: string): number {
    return this.state.event()?.ticketTiers.find(t => t.id === tierId)?.remaining ?? 10;
  }

  setQuantity(tierId: string, qty: number): void {
    this.state.setQuantity(tierId, qty);
  }

  goToStep(step: number): void {
    const clamped = Math.min(4, Math.max(1, step)) as 1 | 2 | 3 | 4;
    this.state.goToStep(clamped);
    if (clamped === 2) this.syncAttendeeForm();
  }

  continueFromStep1(): void {
    if (this.state.ticketCount() === 0) return;
    this.goToStep(2);
  }

  continueFromStep2(): void {
    if (this.attendees.invalid) {
      this.attendees.markAllAsTouched();
      return;
    }
    this.state.setAttendees(this.attendees.value);
    this.goToStep(3);
  }

  pay(): void {
    if (this.paymentMethod() === 'card' && !this.attemptedCardPayment()) {
      this.attemptedCardPayment.set(true);
      this.paymentDeclined.set(true);
      return;
    }
    this.paymentDeclined.set(false);
    this.state.confirmOrder();
    this.goToStep(4);
  }

  backToEvent(): void {
    this.router.navigate(['/events', this.state.event()?.id]);
  }

  goToTickets(): void {
    this.router.navigate(['/tickets']);
  }
}
