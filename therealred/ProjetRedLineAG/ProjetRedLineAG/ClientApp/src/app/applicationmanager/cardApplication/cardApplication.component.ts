import { Component, Inject, Input } from '@angular/core';
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

    @Input() formInfo: [any];
    @Input() person: Persons;
    @Input() personsList: PersonsList;
    @Input() document: Documents;
    @Input() application: ApplicationEntreprisePerson;

    public documentSent: [any] = [{}];
    public documentList: [any];
    public documents: [any] = [{}];
    public entreprise: [any];
    public personSent: [any] = [{}];
    public personList: [any];
    public persons: [any] = [{}];
    public saved: [any] = [{}];
    public update: ApplicationUp;
    inputPerson: string = "";
    documentTitle: string = "Documents";

    constructor(private router: Router, private _amService: ApplicationManagerService, private route: ActivatedRoute,) {

    }
    ngOnInit(): void {
        this.update = new ApplicationUp();
        this.person = new Persons();
        this.personsList = new PersonsList();
        this.document = new Documents();
        this.application = new ApplicationEntreprisePerson()

        let id = +this.route.snapshot.params['id'];

        this._amService.getApplication(id).subscribe(result => {
            console.log("oxi");
            this.application = result;
            console.log(this.application);

            this._amService.getEntrepriseNoApplication(this.application[0].entrepriseId).subscribe(response => {
                this.entreprise = response;
                console.log('etaentreprise');
                console.log(this.entreprise);
                console.log('etaentreprise')

            })
        }, error => console.error(error));


        this._amService.getPersonDocEntreprise().subscribe(data => {
            this.formInfo = data;
            console.log('etaMenino');
            console.log(this.formInfo);
        });

        this._amService.getApplicationPersonSent(id).subscribe(data => {
            this.personSent = data;
            console.log('xitaaas');
            console.log(this.personSent);

            // ASSOCIATING docs with doc sentList for the application
            this._amService.getContacts().subscribe(data => {
                this.personList = data;
                console.log("blog");
                console.log(this.personList);

                this.personSent.forEach(x => {                    
                    this.personList.forEach(y => {
                        if (x.personId == y.id) {
                            this.persons.push(y)
                            console.log(this.persons);
                        }
                    });
                })

            })

        })

        this._amService.getApplicationDocSent(id).subscribe(data => {
            this.documentSent = data;
            console.log('xitos');
            console.log(this.documentSent);

            // ASSOCIATING docs with doc sentList for the application
            this._amService.getDocs().subscribe(data => {
                this.documentList = data;
                console.log("banane");
                console.log(this.documentList);

                this.documentSent.forEach(x => {
                   

                    this.documentList.forEach(y => {
                        if (x.documentId == y.documentId) {
                            this.documents.push(y)
                            console.log(this.documents);
                        }
                    });
                })

            })
            
        })        
    }
    editContact() {

        this.persons.shift();
        

        this.saved.push(this.documents, this.persons, this.application, this.entreprise);
       
        this.saved.shift();
        console.log('savbed')
        console.log(this.saved);

    }
    public navigate(x) {
        
        window.open(x, "_blank")

    }
    setPerson(x: any) {

        this.person = x;
        this.inputPerson = x.firstNamePerson + " " + x.lastNamePerson;
        console.log(this.person);
    }
    addContactToList() {

        console.log(this.person);
        console.log(this.application);
        debugger;
        this.application[0].personSent.push({ ApplicationId: this.application.Id, PersonId: this.person.id });
        this.personsList.person.push(this.person);        
        console.log('macaco');
        console.log(this.personsList)
    }
    setDocument(x: Documents) {
        this.documentTitle = x.titleDocument;
        this.document = x;

    }
    addDocToList() {
        this.application[0].documentSent.push({ DocumentId: this.document.documentId, ApplicationId: this.application[0].applicationId })
        this.documentList.push(this.document);
        debugger;
        console.log('aqui');
        console.log(this.documentList);

    }
    reloadComponent() {

        let currentUrl = this.router.url;

        this.router.routeReuseStrategy.shouldReuseRoute = () => false;

        this.router.onSameUrlNavigation = 'reload';

        this.router.navigate([currentUrl]);

    }
    goDelete(id: number) {
        this._amService.deleteApplication(id).subscribe(() => {
            let link = ['/'];
            this.router.navigate(link);
        })
    }
    updateApplication() {

        this._amService.updateApplication(this.application).subscribe(() => {
            let link = ['/'];
            this.router.navigate(link);
        })

    }

  
}
