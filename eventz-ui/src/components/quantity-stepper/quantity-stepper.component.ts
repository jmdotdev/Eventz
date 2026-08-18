import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-stepper',
  standalone: true,
  templateUrl: './quantity-stepper.component.html',
})
export class QuantityStepperComponent {
  @Input() value = 0;
  @Input() min = 0;
  @Input() max = 10;
  @Input() size: 'sm' | 'lg' = 'sm';
  @Output() valueChange = new EventEmitter<number>();

  dec(): void {
    if (this.value > this.min) this.valueChange.emit(this.value - 1);
  }

  inc(): void {
    if (this.value < this.max) this.valueChange.emit(this.value + 1);
  }
}
