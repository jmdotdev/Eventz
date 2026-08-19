import { Component } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideImage, lucideInfo, lucidePlus, lucideX } from '@ng-icons/lucide';
import { hashGradient } from '../../../utils/gradient';
import { formatKes } from '../../../utils/format';

interface StepDef {
  label: string;
  status: 'current' | 'complete' | 'upcoming';
}

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [ReactiveFormsModule, NgIcon],
  viewProviders: [provideIcons({ lucidePlus, lucideX, lucideImage, lucideInfo, lucideCheck })],
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  readonly steps: StepDef[] = [
    { label: 'Basic information', status: 'current' },
    { label: 'Event details', status: 'complete' },
    { label: 'Date & location', status: 'upcoming' },
    { label: 'Tickets & pricing', status: 'upcoming' },
    { label: 'Media', status: 'upcoming' },
    { label: 'Review & publish', status: 'upcoming' },
  ];

  readonly form = this.fb.group({
    name: ['', Validators.required],
    category: ['Music', Validators.required],
    eventType: ['In-person', Validators.required],
    description: [''],
    date: [''],
    startTime: [''],
    endTime: [''],
    venue: [''],
    city: ['Nairobi'],
    tiers: this.fb.array([
      this.buildTierGroup('Early Bird', 1500, 400),
      this.buildTierGroup('Regular', 2500, 2400),
      this.buildTierGroup('VIP', 7500, 200),
    ]),
    salesStart: [''],
    salesEnd: [''],
  });

  constructor(private fb: FormBuilder) {}

  private buildTierGroup(name: string, price: number, capacity: number) {
    return this.fb.group({
      name: [name, Validators.required],
      price: [price, Validators.required],
      capacity: [capacity, Validators.required],
    });
  }

  get tiers(): FormArray {
    return this.form.get('tiers') as FormArray;
  }

  addTier(): void {
    this.tiers.push(this.buildTierGroup('', 0, 0));
  }

  removeTier(index: number): void {
    this.tiers.removeAt(index);
  }

  get nameLength(): number {
    return this.form.controls.name.value?.length ?? 0;
  }

  get previewGradient(): [string, string] {
    return hashGradient(this.form.controls.name.value || 'preview');
  }

  get previewPrice(): string {
    const prices = this.tiers.value.map((t: { price: number }) => t.price).filter((p: number) => p > 0);
    return prices.length ? formatKes(Math.min(...prices)) : 'KES —';
  }
}
