import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
  standalone: true,  
  selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [CommonModule, NavMenuComponent, RouterModule]
})
export class AppComponent {
  title = 'app';
}
