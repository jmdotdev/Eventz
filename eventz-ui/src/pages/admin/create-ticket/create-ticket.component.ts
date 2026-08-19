import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageHeaderComponent } from '../../../components/admin/page-header/page-header.component';

@Component({
    selector: 'app-create-ticket',
    standalone: true,
    imports: [ReactiveFormsModule, PageHeaderComponent],
    templateUrl: './create-ticket.component.html',
})
export class CreateTicketComponent {
  readonly form = this.fb.group({
    event: ['', Validators.required],
    quantity: [null, Validators.required],
    category: ['', Validators.required],
    cost: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}
}
