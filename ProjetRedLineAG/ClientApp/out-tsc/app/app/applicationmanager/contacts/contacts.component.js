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
import { Persons } from '../models/Persons';
let ContactsComponent = class ContactsComponent {
    router;
    _amService;
    formInfo;
    person;
    manipulatingLink = new EventEmitter();
    manipulateWithId = new EventEmitter();
    contacts;
    statutList;
    constructor(router, _amService) {
        this.router = router;
        this._amService = _amService;
    }
    ngOnInit() {
        this._amService.goContact().subscribe(result => {
            console.log('BELEZA');
            this.contacts = result;
            this.contacts.shift();
            //this.contacts.forEach(x=> 
            console.log(this.contacts);
            this._amService.goStatuts().subscribe(result => {
                console.log('statuts');
                this.statutList = result;
                this.contacts.forEach(x => {
                    this.statutList.forEach(y => {
                        if (y.statutId == x.statutId) {
                            x.statutId = y.titleStatut;
                        }
                    });
                });
                console.log(this.statutList);
                console.log('new');
                console.log(this.contacts);
            }, error => console.error(error));
        }, error => console.error(error));
    }
    personNavigate(id) {
        this.router.navigateByUrl('/cardPerson/' + id);
    }
    navigate(link) {
        this.manipulatingLink.emit(link);
    }
    navigateWithId(linkSent, idSent) {
        this.manipulateWithId.emit({ link: linkSent, id: idSent });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], ContactsComponent.prototype, "formInfo", void 0);
__decorate([
    Input(),
    __metadata("design:type", Persons)
], ContactsComponent.prototype, "person", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ContactsComponent.prototype, "manipulatingLink", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ContactsComponent.prototype, "manipulateWithId", void 0);
ContactsComponent = __decorate([
    Component({
        selector: 'app-contacts-component',
        templateUrl: './contacts.component.html',
        styleUrls: ['../home/home.component.css']
    }),
    __metadata("design:paramtypes", [Router, ApplicationManagerService])
], ContactsComponent);
export { ContactsComponent };
//# sourceMappingURL=contacts.component.js.map