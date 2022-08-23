import { Component, Inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationManagerService } from '../applicationmanager.service';
import { Router } from '@angular/router';
import { Persons } from '../models/Persons';

@Component({
  selector: 'app-contacts-component',
    templateUrl: './contacts.component.html',
    styleUrls: ['../home/home.component.css']

})
export class ContactsComponent implements OnInit {
    @Input() formInfo: [any];
    @Input() person: Persons;

    public contacts: [any];

    constructor(private router: Router, private _amService: ApplicationManagerService) {
      
    }
    ngOnInit(): void {
       /* this._amService.getPersonDocEntreprise().subscribe(data => {
            this.formInfo = data;
            console.log('etaMenino');
            console.log(this.formInfo);
        })*/
        this._amService.goContact().subscribe(result => {
            console.log('BELEZA');
            this.contacts = result;
            console.log(this.contacts);
        }, error => console.error(error));
    }
    personNavigate(id: number) {
        this.router.navigateByUrl('/cardPerson/' + id)
    }
}


