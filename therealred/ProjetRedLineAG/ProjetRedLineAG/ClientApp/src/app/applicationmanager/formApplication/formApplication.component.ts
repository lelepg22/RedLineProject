import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationEntreprisePerson } from '../models/ApplicationEntreprisePerson';
import { ApplicationManagerService } from '../applicationmanager.service';
import { Router } from '@angular/router';
import { Persons } from '../models/Persons';
import { PersonSent } from '../models/PersonSent';
import { PersonsList } from '../models/PersonsList';
import { Documents } from '../models/Documents';


@Component({
    selector: 'app-formApplication-component',
    templateUrl: './formApplication.component.html',
    styleUrls: ['../home/home.component.css']

})
export class FormApplicationComponent implements OnInit {
    @Input() application: ApplicationEntreprisePerson;
    @Input() formInfo: [any];
    @Input() person: Persons;
    @Input() personList: PersonsList;
    @Input() document: Documents;
    @Input() personSent: PersonSent; 

    @Output() manipulatingLink = new EventEmitter<string>();

    documentsList: [{}] = [{}];
    inputPerson: string = "";
    applicId: number = 0;
    entrepriseTitle: string = "Entreprises";
    documentTitle: string = "Documents";
    statutTitle: string = "Statuts";


    ngOnInit() {

        this.application = new ApplicationEntreprisePerson();
        this.personSent = new PersonSent();
        this.personList = new PersonsList();
        this.person = new Persons();
        this.document = new Documents();

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
        this.application.personSent.shift();
        this.application.documentSent.shift();
        //this.personSent.person.shift();        
        this._amService.postApplication(this.application).subscribe(() => {
            let link = ['/'];
            this.router.navigate(link);
        })       
        
    }
    setPerson(x: any) {
        
        this.person = x;
        this.inputPerson = x.firstNamePerson + " " + x.lastNamePerson;
        console.log(this.person);
    }

    setEntreprise(x: any, y: string) {
        this.application.EntrepriseId = x;
        this.entrepriseTitle = y;
        
    }

    setDocument(x: Documents) {
        this.documentTitle = x.titleDocument;
        this.document = x;
        
    }
    addDocToList() {
        this.application.documentSent.push({ DocumentId: this.document.documentId, ApplicationId: (this.applicId) })
        this.documentsList.push(this.document);
        console.log('aqui');
        console.log(this.documentsList);
        
    }

    setStatut(x: any) {
        this.statutTitle = x;
    }


    addContactToList() {
     
        console.log(this.person);
        console.log(this.application)
        
       // this.personSent.person.push({PersonId: this.person.id, ApplicationId: (this.applicId) });
        this.personList.person.push(this.person);
        this.application.personSent.push({ PersonId: this.person.id, ApplicationId: (this.applicId) });       
        console.log('macaco');
        
        
    }
    navigate(link: string) {

        this.manipulatingLink.emit(link);

    }
}
