var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApplicationEntreprisePerson } from '../models/ApplicationEntreprisePerson';
import { Entreprises } from '../models/Entreprises';
import { Persons } from '../models/Persons';
import { ApplicationManagerService } from '../applicationmanager.service';
import { Router } from '@angular/router';
import { Statut } from '../models/Statut';
let FormPersonComponent = class FormPersonComponent {
    _amService;
    router;
    application;
    entreprise;
    person;
    formInfo;
    manipulatingLink = new EventEmitter();
    statut;
    inputPerson = "prenom, nom";
    statutTitle = "Statuts";
    entrepriseTitle = "Entreprises";
    addNewStatut = false;
    ngOnInit() {
        this.application = new ApplicationEntreprisePerson();
        this.entreprise = new Entreprises();
        this.person = new Persons();
        this.statut = new Statut;
        this._amService.getPersonDocEntreprise().subscribe((data) => {
            this.formInfo = data;
            this.formInfo[3].shift();
            this.formInfo[0].shift();
            console.log('etaMenino');
            console.log(this.formInfo);
        });
    }
    constructor(_amService, router) {
        this._amService = _amService;
        this.router = router;
    }
    onSubmit() {
        console.log(this.person);
        this._amService.postPerson(this.person).subscribe(() => {
            this.navigate('contacts');
        });
    }
    setStatut(x) {
        this.statutTitle = x.titleStatut;
        this.person.statutId = x.statutId;
        /* this.person.Statut.shift();
         this.person.Statut.push({ TitleStatut: x });*/
    }
    setEntreprise(x, y) {
        this.person.entrepriseId = x;
        this.entrepriseTitle = y;
    }
    navigate(link) {
        this.manipulatingLink.emit(link);
    }
    addStatut() {
        this.addNewStatut = true;
    }
    goStatutNew() {
        this._amService.postStatut(this.statut).subscribe(() => {
            //this.ngOnInit();
            this.formInfo[3] = null;
            this._amService.getPersonDocEntreprise().subscribe((data) => {
                this.formInfo = data;
                this.formInfo[3].shift();
                this.formInfo[0].shift();
                console.log('etaMenino');
                console.log(this.formInfo);
            });
            this.addNewStatut = false;
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", ApplicationEntreprisePerson)
], FormPersonComponent.prototype, "application", void 0);
__decorate([
    Input(),
    __metadata("design:type", Entreprises)
], FormPersonComponent.prototype, "entreprise", void 0);
__decorate([
    Input(),
    __metadata("design:type", Persons)
], FormPersonComponent.prototype, "person", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], FormPersonComponent.prototype, "formInfo", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FormPersonComponent.prototype, "manipulatingLink", void 0);
FormPersonComponent = __decorate([
    Component({
        selector: 'app-formPerson-component',
        templateUrl: './formPerson.component.html',
        styleUrls: ['../home/home.component.css']
    }),
    __metadata("design:paramtypes", [ApplicationManagerService,
        Router])
], FormPersonComponent);
export { FormPersonComponent };
//# sourceMappingURL=formPerson.component.js.map