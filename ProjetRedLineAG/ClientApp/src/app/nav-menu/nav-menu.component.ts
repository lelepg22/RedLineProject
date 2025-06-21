import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  standalone: true,  
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css'],
    imports: [RouterModule, CommonModule]

})
export class NavMenuComponent {
  
  
 isExpanded = false;

 constructor(private router: Router) {
    }

    navigate() {
        window.location.reload();
    }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
