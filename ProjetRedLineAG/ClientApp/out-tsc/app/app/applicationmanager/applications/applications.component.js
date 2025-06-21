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
let ApplicationsComponent = class ApplicationsComponent {
    router;
    applications;
    manipulatingLink = new EventEmitter();
    application;
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.do();
    }
    goCardApplication(id) {
        this.router.navigateByUrl('/cardApplication/' + id);
    }
    navigateWithId(linkSent, idSent) {
        if (idSent == 1) {
            return;
        }
        this.manipulatingLink.emit({ link: linkSent, id: idSent });
    }
    do() {
        let link2 = ['/'];
        this.router.navigate(link2);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ApplicationsComponent.prototype, "applications", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ApplicationsComponent.prototype, "manipulatingLink", void 0);
ApplicationsComponent = __decorate([
    Component({
        selector: 'app-applications',
        templateUrl: './applications.component.html',
        styleUrls: ['../home/home.component.css']
    }),
    __metadata("design:paramtypes", [Router])
], ApplicationsComponent);
export { ApplicationsComponent };
//# sourceMappingURL=applications.component.js.map