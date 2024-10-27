import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { EventsService } from '../../services/events/events.service';
import { IEvent } from '../../interfaces/interface';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { EventComponent } from "../../components/event/event.component";
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, EventComponent, FooterComponent],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss'
})
export class EventDetailComponent implements OnInit {
  eventsList: IEvent[] = []
  event:IEvent | undefined;
  location = faMapMarkerAlt;
  watch = faStopwatch;
  clock = faClock;
  userIcon = faUserCircle;
  calendar = faCalendarPlus;
  plus = faPlusCircle;
  minus = faMinusCircle;
  ticketsCount: number = 0;
  constructor ( private eventsService: EventsService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(res => {
      if(res.events.length) {
         this.eventsList = res.events
         let eventId = this.activatedRoute.snapshot.params['id']
         this.event = this.eventsList.find(e => e.id = eventId)
      }
      else {
        console.log("error loading events")
      }
    })
  }

}
