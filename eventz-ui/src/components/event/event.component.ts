import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from '../../services/events/events.service';
import { IEvent } from '../../interfaces/interface';
@Component({
  selector: 'app-event',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent implements OnInit {
  events: IEvent[] = [];
  constructor ( private eventsService: EventsService ) {}

  ngOnInit(): void {
   this.eventsService.getEvents().subscribe((res: { events: IEvent[] }) => {
      console.log(res);
      this.events = res.events
    });
  }
}
