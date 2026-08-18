import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step-progress',
  standalone: true,
  templateUrl: './step-progress.component.html',
})
export class StepProgressComponent {
  @Input() steps: string[] = [];
  @Input() current = 1;
  @Output() stepClick = new EventEmitter<number>();
}
