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
let EntreprisesComponent = class EntreprisesComponent {
    router;
    _amService;
    entreprises;
    manipulatingLink = new EventEmitter();
    manipulateWithId = new EventEmitter();
    constructor(router, _amService) {
        this.router = router;
        this._amService = _amService;
    }
    ngOnInit() {
        this._amService.goEntreprise().subscribe(result => {
            console.log(result);
            this.entreprises = result;
            this.entreprises.shift();
            this.do();
        }, error => console.error(error));
    }
    goCardEntreprise(x) {
        this.router.navigateByUrl('/cardEntreprise/' + x);
    }
    navigate(link) {
        this.manipulatingLink.emit(link);
    }
    navigateWithId(linkSent, idSent) {
        this.manipulateWithId.emit({ link: linkSent, id: idSent });
    }
    do() {
        let link2 = ['/'];
        this.router.navigate(link2);
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], EntreprisesComponent.prototype, "manipulatingLink", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], EntreprisesComponent.prototype, "manipulateWithId", void 0);
EntreprisesComponent = __decorate([
    Component({
        selector: 'app-entreprises-component',
        templateUrl: './entreprises.component.html',
        styleUrls: ['../home/home.component.css']
    }),
    __metadata("design:paramtypes", [Router, ApplicationManagerService])
], EntreprisesComponent);
export { EntreprisesComponent };
//# sourceMappingURL=entreprises.component.js.map