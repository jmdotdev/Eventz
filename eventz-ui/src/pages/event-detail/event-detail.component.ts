import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { EventsService } from '../../services/events/events.service';
import { IEvent } from '../../interfaces/interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss'
})
export class EventDetailComponent implements OnInit {
  eventsList: IEvent[] = []
  event:IEvent | undefined;
  constructor ( private eventsService: EventsService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(res => {
      if(res.events.length) {
         this.eventsList = res.events
         let eventId = this.activatedRoute.snapshot.params['id']
         this.event = this.eventsList.find(e => e.id = eventId)
         console.log("event",this.event)
      }
      else {
        console.log("error loading events")
      }
    })
  }

}
