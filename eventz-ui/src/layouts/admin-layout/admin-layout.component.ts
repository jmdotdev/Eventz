import { Component } from '@angular/core';
import { SideNavComponent } from "../../components/admin/side-nav/side-nav.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [SideNavComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

}
