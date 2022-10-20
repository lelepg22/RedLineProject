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
    @Input() formInfo: [any,any,any,any];
    @Input() person: Persons;
    @Input() personList: PersonsList;
    @Input() document: Documents;
    @Input() personSent: PersonSent; 

    @Output() manipulatingLink = new EventEmitter<string>();

    documentsList: [{ documentId: number, titleDocument: string }] = [{ documentId: 0, titleDocument: "" }];
    inputPerson: string = "Personne";
    applicId: number = 0;
    entrepriseTitle: string = "Entreprises";
    documentTitle: string = "Documents";
    statutTitle: string = "Statuts";

    public listFilter: any;
    public newDoc: any;
    public add: boolean = false;


    ngOnInit() {
        this.newDoc = new Documents;
        this.application = new ApplicationEntreprisePerson();
        this.personSent = new PersonSent();
        this.personList = new PersonsList();
        this.person = new Persons();
        this.document = new Documents();

        this._amService.goHome().subscribe(data => {
           
            this.applicId = data[data.length - 1].applicationId;

    } )

        this._amService.getPersonDocEntreprise().subscribe(data => {
            this.formInfo = data;
            this.formInfo[1].shift();
            this.formInfo[0].shift();                    
        })

    }
    constructor(
        private _amService: ApplicationManagerService,
        private router: Router) { }

    onSubmit(): void {
        
        this.application.personSent.shift();
        this.application.documentSent.shift();
        //this.personSent.person.shift();        
        this._amService.postApplication(this.application).subscribe(() => {
            let link = ['/applications'];
            this.router.navigate(link);
       
        })       
        
    }
    setPerson(x: any) {
        
        this.person = x;
        this.inputPerson = x.firstNamePerson + " " + x.lastNamePerson;       
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
        if (!this.document.documentId) {
            return console.log("Vous n'avez pas choisi de document");
        }
        var c = this.document.documentId;
        this.listFilter = this.application.documentSent.filter(function (x) {
            return x.DocumentId != c
        })
        this.application.documentSent = this.listFilter;

        this.application.documentSent.push({ DocumentId: this.document.documentId, ApplicationId: (this.applicId) })
        
        var a = this.document;
        this.listFilter = this.documentsList.filter(function (e) {
            return e != a;
        });
        this.documentsList = this.listFilter;
        this.documentsList.push(this.document);
     
    }
    removeFromDocList(id: number) {
        for (var i = 0; i < this.documentsList.length; i++) {
            if (this.documentsList[i].documentId == id) {
                
                this.documentsList.splice(i, 1);
                
            }
        }
     
    }

    setStatut(x: any) {
        this.statutTitle = x;
    }


    addContactToList() {
     
        if (!this.person.id) {
            return console.log("Vous n'avez pas choisi une personne");
        }
        
        var a = this.person;
        
        this.listFilter = this.personList.person.filter(function (e) {
            return e != a;
        });

        this.personList.person = this.listFilter;
        this.personList.person.push(this.person);

        var b = this.person.id;

        this.listFilter = this.application.personSent.filter(function (x) {            
            return x.PersonId != b
        })
        
        this.application.personSent = this.listFilter;        
       
        this.application.personSent.push({ PersonId: this.person.id, ApplicationId: (this.applicId) });       
             
    }
    removeFromPersonList(id: number) {
        for (var i = 0; i < this.personList.person.length; i++) {
            if (this.personList.person[i].id == id) {
                
                this.personList.person.splice(i, 1);
               
            }
        }
    }

    navigate(link: string) {

        this.manipulatingLink.emit(link);

    }
    addDoc() {
        this.add = true;
    }
    goDoc() {
        this._amService.postDocument(this.newDoc).subscribe(() => {            
            this.add = false;
            this._amService.getPersonDocEntreprise().subscribe(data => {
                this.formInfo = data;
                this.formInfo[1].shift();
                this.formInfo[0].shift();               
            })
            
        })

    }
}
