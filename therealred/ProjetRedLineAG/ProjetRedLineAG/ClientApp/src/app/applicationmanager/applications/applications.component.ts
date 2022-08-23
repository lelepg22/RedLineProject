import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../models/Application';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
    @Input() applications: any;
    public application: Application;

  constructor() { }

  ngOnInit() {
  }

}
