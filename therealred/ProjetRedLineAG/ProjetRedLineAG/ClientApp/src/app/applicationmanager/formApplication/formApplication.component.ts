import { Component, Inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationEntreprisePerson } from '../ApplicationEntreprisePerson';
import { ApplicationManagerService } from '../applicationmanager.service';
import { Router } from '@angular/router';
import { Persons } from '../Persons';
import { PersonSent } from '../PersonSent';


@Component({
    selector: 'app-formApplication-component',
    templateUrl: './formApplication.component.html',
    styleUrls: ['../home/home.component.css']

})
export class FormApplicationComponent implements OnInit {
    @Input() application: ApplicationEntreprisePerson;
    @Input() formInfo: [any];
    @Input() person: Persons;
    @Input() personSent: PersonSent;
    inputPerson: string = "";
    applicId: number = 0;

    ngOnInit() {

        this.application = new ApplicationEntreprisePerson();
        this.personSent = new PersonSent();
        this.person = new Persons();

        this._amService.goHome().subscribe(data => {
            console.log("debuga");
            console.log(data);
            this.applicId = data[data.length - 1].applicationId;

    } )

        this._amService.getPersonDocEntreprise().subscribe(data => {
            this.formInfo = data;
            console.log('etaMenino');
            console.log(this.formInfo);            
        })

    }
    constructor(
        private _amService: ApplicationManagerService,
        private router: Router) { }

    onSubmit(): void {
        alert("Submit form !");
        
        this._amService.postApplication(this.application).subscribe(() => {
            let link = ['/'];
            this.router.navigate(link);
        })       
        debugger;
    }
    setPerson(x: any) {
        
        this.person = x;
        this.inputPerson = x.firstNamePerson + " " + x.lastNamePerson;
        console.log(this.person);
    }
    addContactToList() {
        console.log(this.person);
        console.log('macaco');
        console.log(this.person);
        console.log(this.application)
        this.application.Person.push(this.person);
        this.application.personSent.push({ PersonId: this.person.id, ApplicationId: (this.applicId + 1) });
        console.log('macaco');
        console.log(this.application.personSent);
        
    }
}
