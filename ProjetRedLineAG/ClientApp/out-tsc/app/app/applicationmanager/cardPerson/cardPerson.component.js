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
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationManagerService } from '../applicationmanager.service';
let CardPersonComponent = class CardPersonComponent {
    router;
    _amService;
    route;
    entreprises;
    entreprise = [{}];
    persons;
    person;
    edit = false;
    comment;
    statut;
    id;
    manipulatingLink = new EventEmitter();
    constructor(router, _amService, route) {
        this.router = router;
        this._amService = _amService;
        this.route = route;
    }
    ngOnInit() {
        this._amService.getPerson(this.id).subscribe((result) => {
            console.log('person');
            console.log(result);
            this.person = result;
            console.log(this.person);
            this._amService.getEntreprise(this.person[0].entrepriseId).subscribe(result => {
                if (result.length < 1) {
                    this._amService.getEntrepriseNoApplication(this.person[0].entrepriseId).subscribe((result) => {
                        console.log('fefe');
                        console.log(result);
                        this.entreprise = result;
                        console.log(this.entreprise);
                    });
                    return;
                }
                console.log("linda");
                this.entreprises = result;
                console.log(this.entreprises);
            }, error => console.error(error));
            this._amService.getStatut(this.person[0].statutId).subscribe((result) => {
                console.log('statut');
                console.log(result);
                this.statut = result;
                console.log(this.persons);
            });
        });
        this._amService.getEntreprisePerson(this.id).subscribe((result) => {
            console.log('batato');
            console.log(result);
            this.persons = result;
            console.log(this.persons);
        });
    }
    editPerson() {
        this.edit = true;
    }
    updateEntreprisePerson(id) {
        this._amService.updateEntreprisePerson(id).subscribe(() => {
            this.navigate('contacts');
        });
    }
    updateComment() {
        this.entreprise[0].EntrepriseId = this.id;
        this.entreprise[0].CommentsEntreprise = this.comment;
        this._amService.updateCommentEntreprise(this.entreprise[0]).subscribe(() => {
            this.navigate('contacts');
        });
    }
    goEditPerson() {
        this._amService.updatePerson(this.person[0]).subscribe(() => {
            this.navigate('contacts');
        });
    }
    deletePerson() {
        let text = "Supprimer ?";
        if (confirm(text) == true) {
            this._amService.deletePerson(this.person[0].id).subscribe(() => {
                this.navigate('contacts');
            });
        }
        else {
            return;
        }
    }
    navigate(link) {
        this.manipulatingLink.emit(link);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], CardPersonComponent.prototype, "id", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CardPersonComponent.prototype, "manipulatingLink", void 0);
CardPersonComponent = __decorate([
    Component({
        selector: 'app-cardPerson-component',
        templateUrl: './cardPerson.component.html',
        styleUrls: ['../home/home.component.css']
    }),
    __metadata("design:paramtypes", [Router, ApplicationManagerService, ActivatedRoute])
], CardPersonComponent);
export { CardPersonComponent };
//# sourceMappingURL=cardPerson.component.js.map