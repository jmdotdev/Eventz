import { Component, OnInit } from '@angular/core';
import { IEventCategory } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  eventsList: IEventCategory[] = [
    {
      title: "Tech Innovators Conference",
      description: "A gathering of leading technology professionals and innovators to discuss emerging trends in AI, cloud computing, and cybersecurity. Attendees will have the opportunity to network, attend workshops, and hear keynote speakers from top tech companies.",
      active:true
    },
    {
      title: "Startup Pitch Night",
      description: "Entrepreneurs and startup founders present their business ideas to a panel of investors and industry experts. The event aims to provide feedback and potential funding opportunities for innovative startups.",
      active:true
    },
    {
      title: "Art & Music Festival",
      description: "A vibrant outdoor festival celebrating local artists and musicians. Enjoy live music performances, art exhibitions, food trucks, and interactive workshops for attendees of all ages.",
      active:true
    },
    {
      title: "Health & Wellness Expo",
      description: "An event dedicated to promoting health, fitness, and well-being. Visitors can explore various booths offering health screenings, fitness classes, nutrition advice, and mindfulness sessions.",
      active:true
    }
  ]
  
  ngOnInit(): void {
      
  }
}
