import { Component, Inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationManagerService } from '../applicationmanager.service';
import { Router } from '@angular/router';
import { ApplicationEntreprisePerson } from '../ApplicationEntreprisePerson';
import { Entreprises } from '../Entreprises';
import { Persons } from '../Persons';

@Component({
    selector: 'app-formEntreprise-component',
    templateUrl: './formEntreprise.component.html',
    styleUrls: ['../home/home.component.css']

})
export class FormEntrepriseComponent implements OnInit{
    @Input() application: ApplicationEntreprisePerson; 
    @Input() entreprise: Entreprises;
    @Input() formInfo: [any];
    @Input() person: Persons;
    inputPerson: string = "prenom, nom";

    ngOnInit() {
        this.application = new ApplicationEntreprisePerson();
        this.entreprise = new Entreprises();
        this.person = new Persons();

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
        console.log(this.entreprise);
        
        this._amService.postEntreprise(this.entreprise).subscribe(() => {
            let link = ['/entreprise'];
            this.router.navigate(link);
        })
    }
    setPerson(x: any, y: any, z: any) {

        this.person.id = x;
        this.person.LastNamePerson = y;
        this.person.FirstNamePerson = z;

        this.inputPerson = y + " " + z;

        console.log(this.person);
    }

}
