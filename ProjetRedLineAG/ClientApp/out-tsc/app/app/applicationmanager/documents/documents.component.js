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
import { ApplicationManagerService } from '../applicationmanager.service';
import { Router } from '@angular/router';
import { Documents } from '../models/Documents';
let DocumentsComponent = class DocumentsComponent {
    _amService;
    router;
    documents;
    newDoc;
    add = false;
    manipulatingLink = new EventEmitter();
    constructor(_amService, router) {
        this._amService = _amService;
        this.router = router;
    }
    ngOnInit() {
        this._amService.goDocuments().subscribe(result => {
            console.log(result);
            this.documents = result;
        }, error => console.error(error));
        this.newDoc = new Documents;
    }
    deleteDocument(id) {
        let text = "Supprimer ?";
        if (confirm(text) == true) {
            this._amService.deleteDocument(id).subscribe(() => {
                this.ngOnInit();
            });
        }
        else {
            return;
        }
    }
    addDoc() {
        this.add = true;
    }
    goDoc() {
        if (!this.newDoc.titleDocument) {
            return console.log("Vous n'avez pas ajout� de document");
        }
        this._amService.postDocument(this.newDoc).subscribe(() => {
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
], DocumentsComponent.prototype, "manipulatingLink", void 0);
DocumentsComponent = __decorate([
    Component({
        selector: 'app-documents-component',
        templateUrl: './documents.component.html',
        styleUrls: ['../home/home.component.css']
    }),
    __metadata("design:paramtypes", [ApplicationManagerService,
        Router])
], DocumentsComponent);
export { DocumentsComponent };
//# sourceMappingURL=documents.component.js.map