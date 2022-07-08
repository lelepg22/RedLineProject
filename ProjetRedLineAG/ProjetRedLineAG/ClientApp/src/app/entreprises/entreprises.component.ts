import { Component } from '@angular/core';

@Component({
  selector: 'app-entreprises-component',
  templateUrl: './entreprises.component.html'
})
export class EntreprisesComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
