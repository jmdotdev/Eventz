import { Component } from '@angular/core';
import { TableHeaderComponent } from "../../../components/admin/table-header/table-header.component";
import { EventsTableComponent } from "../../../components/admin/events-table/events-table.component";
import { OrganizersTableComponent } from "../../../components/admin/organizers-table/organizers-table.component";

@Component({
    selector: 'app-admin-events-list',
    standalone: true,
    imports: [TableHeaderComponent, EventsTableComponent, OrganizersTableComponent],
    templateUrl: './admin-events-list.component.html',
})
export class AdminEventsListComponent {
    showEvents: boolean = true;

    toggleEvents (value: boolean) {
      this.showEvents = value;
    }
}
