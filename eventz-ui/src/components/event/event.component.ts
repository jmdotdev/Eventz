import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-event',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  events = [
    {
      title: "Event One",
      description: "This is the first event description.",
      date: { day: 14, month: "Apr" },
      price: "10-20"
    },
    {
      title: "Event Two",
      description: "This is the second event description.",
      date: { day: 18, month: "May" },
      price: "15-25"
    },
    {
      title: "Event Three",
      description: "This is the third event description.",
      date: { day: 22, month: "Jun" },
      price: "20-30"
    },
    {
      title: "Event Four",
      description: "This is the fourth event description.",
      date: { day: 10, month: "Jul" },
      price: "12-22"
    },
    {
      title: "Event Five",
      description: "This is the fifth event description.",
      date: { day: 25, month: "Aug" },
      price: "18-28"
    },
    {
      title: "Event Six",
      description: "This is the sixth event description.",
      date: { day: 5, month: "Sep" },
      price: "10-15"
    },
    {
      title: "Event Seven",
      description: "This is the seventh event description.",
      date: { day: 30, month: "Oct" },
      price: "20-40"
    },
    {
      title: "Event Eight",
      description: "This is the eighth event description.",
      date: { day: 15, month: "Nov" },
      price: "25-35"
    }
  ];  
}
