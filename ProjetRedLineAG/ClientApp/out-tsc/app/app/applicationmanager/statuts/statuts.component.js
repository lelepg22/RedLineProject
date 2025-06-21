var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationManagerService } from '../applicationmanager.service';
import { Statut } from '../models/Statut';
let StatutsComponent = class StatutsComponent {
    _amService;
    router;
    statuts;
    newStatut;
    add = false;
    contacts;
    manipulatingLink = new EventEmitter();
    constructor(_amService, router) {
        this._amService = _amService;
        this.router = router;
    }
    ngOnInit() {
        this._amService.goStatuts().subscribe(result => {
            console.log(result);
            this.statuts = result;
            this.statuts.shift();
        }, error => console.error(error));
        this.newStatut = new Statut;
        this._amService.goContact().subscribe(result => {
            console.log('BELEZA');
            this.contacts = result;
            this.contacts.shift();
            //this.contacts.forEach(x=> 
            console.log(this.contacts);
        }, error => console.error(error));
    }
    deleteStatut(id) {
        let text = "Supprimer ?";
        if (confirm(text) == true) {
            this.contacts.forEach(x => {
                if (x.statutId == id) {
                    x.statutId = 1;
                    this._amService.updatePerson(x).subscribe((result) => {
                        console.log('resu');
                        console.log(result);
                    });
                }
            });
            this._amService.deleteStatut(id).subscribe(() => {
                this.ngOnInit();
            });
        }
        else {
            return;
        }
    }
    addStatut() {
        this.add = true;
    }
    goStatut() {
        if (!this.newStatut.titleStatut) {
            return console.log("Vous n'avez pas ajout� de document");
        }
        this._amService.postStatut(this.newStatut).subscribe(() => {
            this.ngOnInit();
        });
    }
    navigate(link) {
        this.manipulatingLink.emit(link);
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], StatutsComponent.prototype, "manipulatingLink", void 0);
StatutsComponent = __decorate([
    Component({
        selector: 'app-statuts',
        templateUrl: './statuts.component.html',
        styleUrls: ['../home/home.component.css']
    }),
    __metadata("design:paramtypes", [ApplicationManagerService,
        Router])
], StatutsComponent);
export { StatutsComponent };
//# sourceMappingURL=statuts.component.js.map