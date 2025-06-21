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
import { ActivatedRoute, Router } from '@angular/router';
import { Persons } from '../models/Persons';
import { PersonsList } from '../models/PersonsList';
import { Documents } from '../models/Documents';
import { ApplicationUp } from '../models/ApplicationUp';
import { ApplicationEntreprisePerson } from '../models/ApplicationEntreprisePerson';
let CardApplicationComponent = class CardApplicationComponent {
    router;
    _amService;
    route;
    formInfo;
    person;
    personsList;
    document;
    application;
    id;
    manipulatingLink = new EventEmitter();
    documentsList = [{ documentId: 0, titleDocument: "" }];
    documentSent = [{}];
    documentList;
    documents = [{}];
    entreprise;
    personSent = [{}];
    personList;
    persons = [{}];
    saved = [{}];
    statutList;
    update;
    listFilter;
    inputPerson = "Personne";
    documentTitle = "Documents";
    constructor(router, _amService, route) {
        this.router = router;
        this._amService = _amService;
        this.route = route;
    }
    ngOnInit() {
        this.update = new ApplicationUp();
        this.person = new Persons();
        this.personsList = new PersonsList();
        this.document = new Documents();
        this.application = new ApplicationEntreprisePerson();
        //let id = +this.route.snapshot.params['id'];
        this._amService.getApplication(this.id).subscribe(result => {
            console.log("oxi");
            this.application = result;
            console.log(this.application);
            this._amService.getEntrepriseNoApplication(this.application[0].entrepriseId).subscribe((response) => {
                this.entreprise = response;
                console.log('etaentreprise');
                console.log(this.entreprise);
                console.log('etaentreprise');
            });
        }, error => console.error(error));
        this._amService.getPersonDocEntreprise().subscribe((data) => {
            this.formInfo = data;
            this.formInfo[1].shift();
            console.log('etaMenino');
            console.log(this.formInfo);
        });
        this._amService.getApplicationPersonSent(this.id).subscribe((data) => {
            this.personSent = data;
            console.log('xitaaas');
            console.log(this.personSent);
            // ASSOCIATING persons with persons sentList for the application
            this._amService.getContacts().subscribe((data) => {
                this.personList = data;
                console.log("blog");
                console.log(this.personList);
                this.personSent.forEach(x => {
                    this.personList.forEach(y => {
                        if (x.personId == y.id) {
                            var pers = Object.assign(y, { "personSentId": x.id });
                            this.persons.push(pers);
                            console.log(this.persons);
                            console.log('coisafeira');
                        }
                    });
                });
                this.persons.shift();
                this._amService.goStatuts().subscribe((result) => {
                    console.log('statuts');
                    this.statutList = result;
                    this.persons.forEach(x => {
                        this.statutList.forEach(y => {
                            if (y.statutId == x.statutId) {
                                x.statutId = y.titleStatut;
                            }
                        });
                    });
                    console.log(this.statutList);
                    console.log('new');
                    console.log(this.persons);
                });
            });
        });
        this._amService.getApplicationDocSent(this.id).subscribe((data) => {
            this.documentSent = data;
            console.log('xitos');
            console.log(this.documentSent);
            // ASSOCIATING docs with doc sentList for the application
            this._amService.getDocs().subscribe((data) => {
                this.documentList = data;
                console.log("banane");
                console.log(this.documentList);
                this.documentSent.forEach(x => {
                    this.documentList.forEach(y => {
                        if (x.documentId == y.documentId) {
                            var doc = Object.assign(y, { "id": x.id });
                            this.documents.push(doc);
                            console.log(this.documents);
                            console.log("arroba");
                        }
                    });
                });
            });
        });
    }
    editContact() {
        this.saved.push(this.documents, this.persons, this.application, this.entreprise);
        this.saved.shift();
        console.log('savbed');
        console.log(this.saved);
    }
    navigate(x) {
        window.open(x, "_blank");
    }
    setPerson(x) {
        this.person = x;
        this.inputPerson = x.firstNamePerson + " " + x.lastNamePerson;
        console.log(this.person);
    }
    addContactToList() {
        var x = this.person;
        this.listFilter = this.persons.filter(function (a) {
            return a.id == x.id;
        });
        if (this.listFilter.length > 0) {
            return console.log('d�j� ajout�');
        }
        this.listFilter = this.personsList.person.filter(function (e) {
            return e != x;
        });
        if (this.listFilter.length == this.personsList.person.length) {
            var data = { ApplicationId: this.application[0].applicationId, PersonId: this.person.id };
            this.application[0].personSent.push(data);
            this._amService.postPersonSent(data).subscribe((x) => {
                this._amService.getApplicationPersonSent(this.id).subscribe((data) => {
                    this.personSent = data;
                    console.log('xitaaas');
                    console.log(this.personSent);
                });
            });
            console.log(this.application);
        }
        this.personsList.person = this.listFilter;
        this.personsList.person.push(this.person);
    }
    setDocument(x) {
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
                return z.titleDocument == find;
            }).length > 0) {
                return console.log("document d�j� ajout�");
            }
            var data = { DocumentId: this.document.documentId, ApplicationId: this.application[0].applicationId };
            this.application[0].documentSent.push(data);
            this._amService.postDocSent(data).subscribe((x) => this._amService.getApplicationDocSent(this.id).subscribe((data) => {
                this.documentSent = data;
            }));
        }
        console.log(this.documents);
        this.documentsList = this.listFilter;
        this.documentsList.push(this.document);
        console.log('aqui');
        console.log(this.application);
        console.log(this.documentList);
    }
    reloadComponent() {
        let link = ['/applications'];
        this.router.navigate(link);
    }
    goDelete(id) {
        let text = "Supprimer ?";
        if (confirm(text) == true) {
            this._amService.deleteApplication(id).subscribe(() => {
                let link = ['/applications'];
                this.router.navigate(link);
            });
        }
        else {
            return;
        }
    }
    goDeleteDocSent(document) {
        this._amService.deleteDocumentSent(document.id).subscribe(() => {
            console.log(this.documents);
            this.listFilter = this.documents.filter(function (x) { return x != document; });
            this.documents = this.listFilter;
        });
    }
    goDeletePersonSent(person) {
        console.log(person);
        console.log("this", this.persons);
        this.listFilter = this.persons.filter(x => { return x.id != person.id; });
        this.persons = this.listFilter;
        this._amService.deletePersonSent(person.personSentId).subscribe(() => {
            console.log("aqui");
        });
    }
    updateApplication() {
        this._amService.updateApplication(this.application).subscribe(() => {
            let link = ['/applications'];
            this.router.navigate(link);
        });
    }
    navigateWithId(linkSent, idSent) {
        this.manipulatingLink.emit({ link: linkSent, id: idSent });
    }
    removeFromPersonList(id) {
        for (var i = 0; i < this.personsList.person.length; i++) {
            if (this.personsList.person[i].id == id) {
                console.log(this.personsList.person[i].id + " - " + id);
                this.personsList.person.splice(i, 1);
            }
        }
        this.listFilter = this.personSent.filter(function (a) {
            return a.personId == id;
        });
        this._amService.deletePersonSent(this.listFilter[0].id).subscribe(() => {
            console.log("aqui");
        });
    }
    removeFromDocList(doc) {
        console.log(this.documentSent);
        console.log("bana", this.documentSent.filter(function (a) {
            return a.documentId == doc.documentId;
        }));
        this.listFilter = this.documentSent.filter(function (a) {
            return a.documentId == doc.documentId;
        });
        debugger;
        this._amService.deleteDocumentSent(this.listFilter[0].id).subscribe(() => {
            console.log("oia", this.listFilter);
        });
        for (var i = 0; i < this.documentsList.length; i++) {
            if (this.documentsList[i].documentId == doc.documentId) {
                console.log(this.documentsList[i].documentId + " - " + doc.documentId);
                this.documentsList.splice(i, 1);
            }
        }
        console.log("oi", doc);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], CardApplicationComponent.prototype, "formInfo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Persons)
], CardApplicationComponent.prototype, "person", void 0);
__decorate([
    Input(),
    __metadata("design:type", PersonsList)
], CardApplicationComponent.prototype, "personsList", void 0);
__decorate([
    Input(),
    __metadata("design:type", Documents)
], CardApplicationComponent.prototype, "document", void 0);
__decorate([
    Input(),
    __metadata("design:type", ApplicationEntreprisePerson)
], CardApplicationComponent.prototype, "application", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], CardApplicationComponent.prototype, "id", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CardApplicationComponent.prototype, "manipulatingLink", void 0);
CardApplicationComponent = __decorate([
    Component({
        selector: 'app-cardApplication-component',
        templateUrl: './cardApplication.component.html',
        styleUrls: ['../home/home.component.css']
    }),
    __metadata("design:paramtypes", [Router, ApplicationManagerService, ActivatedRoute])
], CardApplicationComponent);
export { CardApplicationComponent };
//# sourceMappingURL=cardApplication.component.js.map