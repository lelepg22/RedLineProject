import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../models/Application';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
    styleUrls: ['../home/home.component.css']
})
export class ApplicationsComponent implements OnInit {
    @Input() applications: any;

    @Output() manipulatingLink = new EventEmitter<{ id: number, link:string }>();

    public application: Application;

    constructor(private router: Router) { }

  ngOnInit() {
  }
    goCardApplication(id: any) {

        this.router.navigateByUrl('/cardApplication/' + id);
    }
    navigateWithId(linkSent: string, idSent: number) {

        this.manipulatingLink.emit({ link: linkSent, id: idSent });

    }

}
