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
import { ApplicationManagerService } from '../applicationmanager.service';
import { Router } from '@angular/router';
import { Persons } from '../models/Persons';
import { PersonSent } from '../models/PersonSent';
import { PersonsList } from '../models/PersonsList';
import { Documents } from '../models/Documents';
let FormApplicationComponent = class FormApplicationComponent {
    _amService;
    router;
    application;
    formInfo;
    person;
    personList;
    document;
    personSent;
    manipulatingLink = new EventEmitter();
    documentsList = [{ documentId: 0, titleDocument: "" }];
    inputPerson = "Personne";
    applicId = 0;
    entrepriseTitle = "Entreprises";
    documentTitle = "Documents";
    statutTitle = "Statuts";
    listFilter;
    newDoc;
    add = false;
    ngOnInit() {
        this.newDoc = new Documents;
        this.application = new ApplicationEntreprisePerson();
        this.personSent = new PersonSent();
        this.personList = new PersonsList();
        this.person = new Persons();
        this.document = new Documents();
        this._amService.goHome().subscribe((data) => {
            console.log("debuga");
            console.log(data);
            this.applicId = data[data.length - 1].applicationId;
        });
        this._amService.getPersonDocEntreprise().subscribe((data) => {
            this.formInfo = data;
            this.formInfo[1].shift();
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
        this.application.personSent.shift();
        this.application.documentSent.shift();
        //this.personSent.person.shift();        
        this._amService.postApplication(this.application).subscribe(() => {
            let link = ['/applications'];
            this.router.navigate(link);
        });
    }
    setPerson(x) {
        this.person = x;
        this.inputPerson = x.firstNamePerson + " " + x.lastNamePerson;
        console.log(this.person);
    }
    setEntreprise(x, y) {
        this.application.EntrepriseId = x;
        this.entrepriseTitle = y;
    }
    setDocument(x) {
        this.documentTitle = x.titleDocument;
        this.document = x;
    }
    addDocToList() {
        if (!this.document.documentId) {
            return console.log("Vous n'avez pas choisi de document");
        }
        var c = this.document.documentId;
        this.listFilter = this.application.documentSent.filter(function (x) {
            return x.DocumentId != c;
        });
        this.application.documentSent = this.listFilter;
        this.application.documentSent.push({ DocumentId: this.document.documentId, ApplicationId: (this.applicId) });
        console.log(this.application.documentSent);
        var a = this.document;
        this.listFilter = this.documentsList.filter(function (e) {
            return e != a;
        });
        this.documentsList = this.listFilter;
        this.documentsList.push(this.document);
        console.log('aqui');
        console.log(this.documentsList);
    }
    removeFromDocList(id) {
        for (var i = 0; i < this.documentsList.length; i++) {
            if (this.documentsList[i].documentId == id) {
                console.log(this.documentsList[i].documentId + " - " + id);
                this.documentsList.splice(i, 1);
            }
        }
    }
    setStatut(x) {
        this.statutTitle = x;
    }
    addContactToList() {
        console.log(this.person);
        if (!this.person.id) {
            return console.log("Vous n'avez pas choisi une personne");
        }
        console.log(this.application);
        var a = this.person;
        this.listFilter = this.personList.person.filter(function (e) {
            return e != a;
        });
        this.personList.person = this.listFilter;
        this.personList.person.push(this.person);
        var b = this.person.id;
        this.listFilter = this.application.personSent.filter(function (x) {
            return x.PersonId != b;
        });
        console.log(this.listFilter, "aqui");
        this.application.personSent = this.listFilter;
        this.application.personSent.push({ PersonId: this.person.id, ApplicationId: (this.applicId) });
        console.log(this.application.personSent);
    }
    removeFromPersonList(id) {
        for (var i = 0; i < this.personList.person.length; i++) {
            if (this.personList.person[i].id == id) {
                console.log(this.personList.person[i].id + " - " + id);
                this.personList.person.splice(i, 1);
            }
        }
    }
    navigate(link) {
        this.manipulatingLink.emit(link);
    }
    addDoc() {
        this.add = true;
    }
    goDoc() {
        this._amService.postDocument(this.newDoc).subscribe(() => {
            this.add = false;
            this._amService.getPersonDocEntreprise().subscribe((data) => {
                this.formInfo = data;
                this.formInfo[1].shift();
                this.formInfo[0].shift();
                console.log('etaMenino');
                console.log(this.formInfo);
            });
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", ApplicationEntreprisePerson)
], FormApplicationComponent.prototype, "application", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], FormApplicationComponent.prototype, "formInfo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Persons)
], FormApplicationComponent.prototype, "person", void 0);
__decorate([
    Input(),
    __metadata("design:type", PersonsList)
], FormApplicationComponent.prototype, "personList", void 0);
__decorate([
    Input(),
    __metadata("design:type", Documents)
], FormApplicationComponent.prototype, "document", void 0);
__decorate([
    Input(),
    __metadata("design:type", PersonSent)
], FormApplicationComponent.prototype, "personSent", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], FormApplicationComponent.prototype, "manipulatingLink", void 0);
FormApplicationComponent = __decorate([
    Component({
        selector: 'app-formApplication-component',
        templateUrl: './formApplication.component.html',
        styleUrls: ['../home/home.component.css']
    }),
    __metadata("design:paramtypes", [ApplicationManagerService,
        Router])
], FormApplicationComponent);
export { FormApplicationComponent };
//# sourceMappingURL=formApplication.component.js.map