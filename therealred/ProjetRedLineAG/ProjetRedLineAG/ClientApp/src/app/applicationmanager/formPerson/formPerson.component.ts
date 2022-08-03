import { Component, Inject, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationEntreprisePerson } from '../models/ApplicationEntreprisePerson';
import { Entreprises } from '../models/Entreprises';
import { Persons } from '../models/Persons';
import { ApplicationManagerService } from '../applicationmanager.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-formPerson-component',
    templateUrl: './formPerson.component.html',
    styleUrls: ['../home/home.component.css']

})
export class FormPersonComponent implements OnInit {
    @Input() application: ApplicationEntreprisePerson;
    @Input() entreprise: Entreprises;
    @Input() person: Persons;
    @Input() formInfo: [any];

    inputPerson: string = "prenom, nom";
    statutTitle: string = "Statuts";
    entrepriseTitle: string = "Entreprises";

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
        console.log(this.person);
        this._amService.postPerson(this.person).subscribe(() => {
            let link = ['/contact'];
            this.router.navigate(link);
        })
    }
    setStatut(x: any) { 
        this.statutTitle = x.titleStatut;
        this.person.StatutId = x.statutId;
       /* this.person.Statut.shift();
        this.person.Statut.push({ TitleStatut: x });*/
        
    }
    setEntreprise(x: any, y: string) {
        
        this.person.EntrepriseId = x;
        this.entrepriseTitle = y;
        debugger;

    }
}
