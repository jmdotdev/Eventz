import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from '../../services/events/events.service';
import { IEvent } from '../../interfaces/interface';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-event',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent implements OnInit {
  events: IEvent[] = [];
  constructor ( private eventsService: EventsService ) {}

  ngOnInit(): void {
   this.eventsService.getEvents().subscribe((res: { events: IEvent[] }) => {
      this.events = res.events
    });
  }
}
