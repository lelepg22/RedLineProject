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
import { ApplicationManagerService } from '../applicationmanager.service';
import { Router } from '@angular/router';
import { ApplicationEntreprisePerson } from '../models/ApplicationEntreprisePerson';
import { Entreprises } from '../models/Entreprises';
import { Persons } from '../models/Persons';
import { PersonsList } from '../models/PersonsList';
import { PersonSent } from '../models/PersonSent';
let FormEntrepriseComponent = class FormEntrepriseComponent {
    _amService;
    router;
    application;
    entreprise;
    formInfo;
    person;
    personList;
    personSent;
    manipulatingLink = new EventEmitter();
    inputPerson = "Personne";
    applicId = 0;
    entrepriId = 0;
    ngOnInit() {
        this.application = new ApplicationEntreprisePerson();
        this.entreprise = new Entreprises();
        this.person = new Persons();
        this.personList = new PersonsList();
        this.personSent = new PersonSent();
        this._amService.goEntreprise().subscribe((data) => {
            console.log("debuga");
            console.log(data);
            this.entrepriId = data[data.length - 1].entrepriseId;
        });
        this._amService.goHome().subscribe((data) => {
            console.log("debuga");
            console.log(data);
            this.applicId = data[data.length - 1].applicationId;
        });
        this._amService.getPersonDocEntreprise().subscribe((data) => {
            this.formInfo = data;
            console.log('etaMenino');
            console.log(this.formInfo);
        });
    }
    constructor(_amService, router) {
        this._amService = _amService;
        this.router = router;
    }
    onSubmit() {
        console.log(this.entreprise);
        if (!this.entreprise.TelEntreprise) {
            this.entreprise.TelEntreprise = "Non informé";
        }
        if (!this.entreprise.EmailEntreprise) {
            this.entreprise.EmailEntreprise = "Non informé";
        }
        this._amService.postEntreprise(this.entreprise).subscribe(() => {
            let link = ['/entreprise'];
            this.router.navigate(link);
        });
    }
    setPerson(x) {
        this.person = x;
        this.inputPerson = x.firstNamePerson + " " + x.lastNamePerson;
        console.log(this.person);
    }
    navigate(link) {
        this.manipulatingLink.emit(link);
    }
};
__decorate([
    Input(),
    __metadata("design:type", ApplicationEntreprisePerson)
], FormEntrepriseComponent.prototype, "application", void 0);
__decorate([
    Input(),
    __metadata("design:type", Entreprises)
], FormEntrepriseComponent.prototype, "entreprise", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], FormEntrepriseComponent.prototype, "formInfo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Persons)
], FormEntrepriseComponent.prototype, "person", void 0);
__decorate([
    Input(),
    __metadata("design:type", PersonsList)
], FormEntrepriseComponent.prototype, "personList", void 0);
__decorate([
    Input(),
    __metadata("design:type", PersonSent)
], FormEntrepriseComponent.prototype, "personSent", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FormEntrepriseComponent.prototype, "manipulatingLink", void 0);
FormEntrepriseComponent = __decorate([
    Component({
        selector: 'app-formEntreprise-component',
        templateUrl: './formEntreprise.component.html',
        styleUrls: ['../home/home.component.css']
    }),
    __metadata("design:paramtypes", [ApplicationManagerService,
        Router])
], FormEntrepriseComponent);
export { FormEntrepriseComponent };
//# sourceMappingURL=formEntreprise.component.js.map