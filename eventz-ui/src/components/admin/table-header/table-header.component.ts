import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucidePlus } from '@ng-icons/lucide';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
    selector: 'app-table-header',
    standalone: true,
    imports: [PageHeaderComponent, NgIcon],
    viewProviders: [provideIcons({ lucidePlus })],
    templateUrl: './table-header.component.html',
})
export class TableHeaderComponent {
    showEventsTable: boolean = true;
    @Output() showEvents = new EventEmitter<boolean>(true);

    constructor (private router: Router) {}

    toggleShowEvents (value: boolean) {
       this.showEvents.emit(value)
       this.showEventsTable = value;
    }
    navigateToAddEvent () {
      this.router.navigate(['/admin/create-event']);
    }
}
