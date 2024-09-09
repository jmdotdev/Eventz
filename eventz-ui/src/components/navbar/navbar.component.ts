import { Component, OnInit } from '@angular/core';
import { IRoutes } from '../../interfaces/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  routes: IRoutes[] = [
    {name:'Home', path: 'home'},
    {name:'About', path: 'about'},
    {name:'Events', path: 'events'},
    {name:'Contact', path: 'contact'},
  ];
  ngOnInit(): void {
     
  }

}
