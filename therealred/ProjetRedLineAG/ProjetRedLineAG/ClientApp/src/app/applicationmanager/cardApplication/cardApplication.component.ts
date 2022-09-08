import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationManagerService } from '../applicationmanager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forEachChild } from 'typescript';
import { Persons } from '../models/Persons';
import { PersonsList } from '../models/PersonsList';
import { Documents } from '../models/Documents';
import { ApplicationUp } from '../models/ApplicationUp';
import { ApplicationEntreprisePerson } from '../models/ApplicationEntreprisePerson';

@Component({
    selector: 'app-cardApplication-component',
    templateUrl: './cardApplication.component.html',
    styleUrls: ['../home/home.component.css']

})
export class CardApplicationComponent {

    @Input() formInfo: [any,any,any,any];
    @Input() person: Persons;
    @Input() personsList: PersonsList;
    @Input() document: Documents;
    @Input() application: ApplicationEntreprisePerson;

    @Input() id: number;

    @Output() manipulatingLink = new EventEmitter<{ id: number, link: string }>();

    documentsList: [{ documentId: number, titleDocument: string }] = [{ documentId: 0, titleDocument: "" }];
    public documentSent: [any] = [{}];
    public documentList: [any];
    public documents: [any] = [{}];
    public entreprise: [any];
    public personSent: [any] = [{}];
    public personList: [any];
    public persons: [any] = [{}];
    public saved: [any] = [{}];
    public statutList: [any];
    public update: ApplicationUp;
    public listFilter: any;
    inputPerson: string = "Personne";
    documentTitle: string = "Documents";


    constructor(private router: Router, private _amService: ApplicationManagerService, private route: ActivatedRoute,) {

    }
    ngOnInit(): void {
        
        this.update = new ApplicationUp();
        this.person = new Persons();
        this.personsList = new PersonsList();
        this.document = new Documents();
        this.application = new ApplicationEntreprisePerson()

        //let id = +this.route.snapshot.params['id'];

        this._amService.getApplication(this.id).subscribe(result => {
            
            this.application = result;          

            this._amService.getEntrepriseNoApplication(this.application[0].entrepriseId).subscribe(response => {
                this.entreprise = response;             

            })
        }, error => console.error(error));


        this._amService.getPersonDocEntreprise().subscribe(data => {
            this.formInfo = data;
            this.formInfo[1].shift();         
        });

        this._amService.getApplicationPersonSent(this.id).subscribe(data => {
            this.personSent = data;           

            // ASSOCIATING persons with persons sentList for the application
            this._amService.getContacts().subscribe(data => {

                this.personList = data;               

                this.personSent.forEach(x => {                    
                    this.personList.forEach(y => {
                        if (x.personId == y.id) {
                            var pers = Object.assign(y, { "personSentId": x.id })
                            this.persons.push(pers);                           
                        }
                    });
                })
                this.persons.shift();
                this._amService.goStatuts().subscribe(result => {
                   
                    this.statutList = result;

                    this.persons.forEach(x => {
                        this.statutList.forEach(y => {
                            if (y.statutId == x.statutId) {
                                x.statutId = y.titleStatut
                            }
                        })
                    })                 

                })

            })

        })

        this._amService.getApplicationDocSent(this.id).subscribe(data => {
            this.documentSent = data;       

            // ASSOCIATING docs with doc sentList for the application
            this._amService.getDocs().subscribe(data => {
                this.documentList = data;              

                this.documentSent.forEach(x => {

                    this.documentList.forEach(y => {
                        if (x.documentId == y.documentId) {
                            var doc = Object.assign(y, { "id": x.id });
                            this.documents.push(doc);                         
                        }
                    });
                })

            })
            
        })        
    }
    editContact() {

        this.saved.push(this.documents, this.persons, this.application, this.entreprise);
       
        this.saved.shift();      

    }
    public navigate(x) {
        
        window.open(x, "_blank");

    }
    setPerson(x: any) {

        this.person = x;
        this.inputPerson = x.firstNamePerson + " " + x.lastNamePerson;        
    }
    addContactToList() {
        var x = this.person;
        this.listFilter = this.persons.filter(function (a) {
           return  a.id == x.id
        }
        );
        
        if (this.listFilter.length > 0) {
            return console.log('déjà ajouté');
        }

        this.listFilter = this.personsList.person.filter(function (e) {
            return e != x
        })
        if (this.listFilter.length == this.personsList.person.length) {
            var data = { ApplicationId: this.application[0].applicationId, PersonId: this.person.id }
            this.application[0].personSent.push(data);
            this._amService.postPersonSent(data).subscribe(x => {
                this._amService.getApplicationPersonSent(this.id).subscribe(data => {
                    
                    this.personSent = data;                   
                })                
            }
            );
           

        }

        this.personsList.person = this.listFilter;        
        
        this.personsList.person.push(this.person);     

    }
    setDocument(x: Documents) {
        this.documentTitle = x.titleDocument;
        this.document = x;

    }
    addDocToList() {    
        var a = this.document;
        this.listFilter = this.documentsList.filter(function (e) {
            return e != a;
        });
        if (this.listFilter.length == this.documentsList.length) {
            var find = this.document.titleDocument;
            if (this.documents.filter(function (z) {
                return z.titleDocument == find
            }).length > 0) {
                return console.log("document déjà ajouté")
            }
            var data = { DocumentId: this.document.documentId, ApplicationId: this.application[0].applicationId };
            this.application[0].documentSent.push(data);
            this._amService.postDocSent(data).subscribe(x =>
                this._amService.getApplicationDocSent(this.id).subscribe(data => {
                this.documentSent = data;
                
            }));
          
        }      

        this.documentsList = this.listFilter;
        this.documentsList.push(this.document);              

    }
    reloadComponent() {

        let link = ['/applications'];
        this.router.navigate(link);  

    }
    goDelete(id: number) {
        let text = "Supprimer ?";

        if (confirm(text) == true) {
            this._amService.deleteApplication(id).subscribe(() => {
                let link = ['/applications'];
                this.router.navigate(link);                
            })
        }
        else { return }
    }
    goDeleteDocSent(document: any) {
        this._amService.deleteDocumentSent(document.id).subscribe(() => {            
            
            this.listFilter = this.documents.filter(function (x) { return  x != document })
          
            this.documents = this.listFilter;
            
        })
    }
    goDeletePersonSent(person: any) {
        
        this.listFilter = this.persons.filter(x => { return x.id != person.id })
        
        this.persons = this.listFilter;
        this._amService.deletePersonSent(person.personSentId).subscribe(() => { 
            console.log('deleted')
           
            
        })
    }
    updateApplication() {

        this._amService.updateApplication(this.application).subscribe(() => {
            let link = ['/applications'];
            this.router.navigate(link);
        })

    }
    navigateWithId(linkSent: string, idSent: number) {

        this.manipulatingLink.emit({ link: linkSent, id: idSent });

    }
    removeFromPersonList(id: number) {
        
        for (var i = 0; i < this.personsList.person.length; i++) {
            if (this.personsList.person[i].id == id) {                
                this.personsList.person.splice(i, 1);
            }
        }
        this.listFilter = this.personSent.filter(function (a) {
            return a.personId == id
        })       

       
        this._amService.deletePersonSent(this.listFilter[0].id).subscribe(() => {
            
            console.log("deleted")

        })


    }

    removeFromDocList(doc: any) {
       
        this.listFilter = this.documentSent.filter(function (a) {
            return a.documentId == doc.documentId;
        });
        debugger;
        this._amService.deleteDocumentSent(this.listFilter[0].id).subscribe(() => {
            console.log("deleted");
            

        })

        for (var i = 0; i < this.documentsList.length; i++) {
            if (this.documentsList[i].documentId == doc.documentId) {
                
                this.documentsList.splice(i, 1);

            }
        }
        

    }


  
}
