import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisH, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgClass } from "../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {
    faElipsisH = faEllipsisH;
    faPlus = faPlus;
    faSearch = faSearch;
    showEventsTable: boolean = true;
    @Output() showEvents = new EventEmitter<boolean>(true);

    toggleShowEvents (value: boolean) {
       this.showEvents.emit(value)
       this.showEventsTable = value;
    }
}
