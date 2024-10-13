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
  showNav: Boolean = false;
  routes: IRoutes[] = [
    {name:'Home', path: 'home'},
    {name:'About', path: 'about'},
    {name:'Events', path: 'events'},
    {name:'Contact', path: 'contact'},
  ];
  ngOnInit(): void {
    if (typeof window !== "undefined") {
      this.handleResize();
      window.addEventListener('resize', this.handleResize.bind(this));
   }
  }

  isMobile(): boolean {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    else {
      return false;
    }
  }

  handleResize() {
    if (window.innerWidth >= 768) {
      this.showNav = true;
    } else {
      this.showNav = false;
    }
  }

  toggleNav() {
    this.showNav = !this.showNav;
  }

  ngOnDestroy() {
    if (typeof window !== "undefined") {
      // Cleanup event listener
      window.removeEventListener('resize', this.handleResize.bind(this)); 
    }
  }

}
