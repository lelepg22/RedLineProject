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
import { Router } from '@angular/router';
let SearchBarComponent = class SearchBarComponent {
    router;
    applications;
    manipulatingLink = new EventEmitter();
    type = "Type";
    typeId = 0;
    search = false;
    searchTitleApplication = false;
    searchDateApplication = false;
    searchEntrepriseApplication = false;
    searchStatusApplication = false;
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goForm() {
        this.manipulatingLink.emit({ link: 'formApp', id: 0 });
    }
    filterTitle() {
        this.search = true;
        this.typeId = 1;
        this.type = "Titre Candidature";
        this.searchTitleApplication = true;
        this.searchEntrepriseApplication = false;
        this.searchStatusApplication = false;
    }
    filterEntreprise() {
        this.search = true;
        this.typeId = 2;
        this.type = "Entreprise";
        this.searchEntrepriseApplication = true;
        this.searchTitleApplication = false;
        this.searchStatusApplication = false;
    }
    filterStatus() {
        this.search = true;
        this.typeId = 3;
        this.type = "Status";
        this.searchStatusApplication = true;
        this.searchEntrepriseApplication = false;
        this.searchTitleApplication = false;
    }
    navigate(x) {
        this.router.navigateByUrl(x);
    }
    navigateWithId(linkSent, idSent) {
        this.manipulatingLink.emit({ link: linkSent, id: idSent });
        this.searchStatusApplication = false;
        this.searchEntrepriseApplication = false;
        this.searchTitleApplication = false;
        this.type = "Type";
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SearchBarComponent.prototype, "applications", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SearchBarComponent.prototype, "manipulatingLink", void 0);
SearchBarComponent = __decorate([
    Component({
        selector: 'app-search-bar',
        templateUrl: './search-bar.component.html',
        styleUrls: ['../home/home.component.css']
    }),
    __metadata("design:paramtypes", [Router])
], SearchBarComponent);
export { SearchBarComponent };
//# sourceMappingURL=search-bar.component.js.map