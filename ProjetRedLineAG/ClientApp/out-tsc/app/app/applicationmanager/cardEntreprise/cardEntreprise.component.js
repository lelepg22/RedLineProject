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
let CardEntrepriseComponent = class CardEntrepriseComponent {
    router;
    _amService;
    route;
    entreprises;
    entreprise = [{}];
    persons;
    edit = false;
    comment;
    statutList;
    personsList;
    id;
    manipulatingLink = new EventEmitter();
    constructor(router, _amService, route) {
        this.router = router;
        this._amService = _amService;
        this.route = route;
    }
    ngOnInit() {
        this._amService.getEntreprisePerson(this.id).subscribe((result) => {
            console.log('batato');
            console.log(result);
            this.persons = result;
            if (this.persons.length > 0) {
                this._amService.goStatuts().subscribe(result => {
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
                }, error => console.error(error));
            }
            console.log(this.persons);
        });
        this._amService.getEntreprise(this.id).subscribe(result => {
            if (result.length < 1) {
                this._amService.getEntrepriseNoApplication(this.id).subscribe((result) => {
                    this.entreprise = result;
                    console.log('biito');
                    console.log(this.entreprise);
                });
                return;
            }
            console.log("oxi");
            this.entreprises = result;
            if (this.entreprises[0].entreprise.entrepriseId == 1) {
            }
            console.log(this.entreprises);
        }, error => console.error(error));
    }
    editEntreprise() {
        this.edit = true;
    }
    deleteEntreprise(id) {
        let text = "Supprimer ?";
        if (confirm(text) == true) {
            if (this.persons.length > 0) {
                if (this.entreprises.length > 0) {
                    this.entreprises.forEach(data => {
                        data.entrepriseId = 1;
                        this._amService.updateApplication(data).subscribe(() => {
                            console.log('updated entreprise');
                            alert('aqusi');
                        });
                    });
                }
                this.persons.forEach(x => {
                    this.statutList.forEach(y => {
                        if (y.titleStatut == x.statutId) {
                            x.statutId = y.statutId;
                        }
                    });
                });
                this.persons.forEach(x => {
                    x.entrepriseId = 1;
                    this._amService.updatePerson(x).subscribe(() => {
                        let link = ['/'];
                        this.router.navigate(link);
                        this._amService.deleteEntreprise(id).subscribe(() => {
                            let link = ['/'];
                            this.router.navigate(link);
                        });
                    });
                });
            }
            if (this.persons.length < 1) {
                if (this.entreprises.length > 0) {
                    this.entreprises.forEach(data => {
                        data.entrepriseId = 1;
                        this._amService.updateApplication(data).subscribe(() => {
                            console.log('updated entreprise');
                        });
                    });
                }
                this._amService.deleteEntreprise(id).subscribe(() => {
                    let link = ['/applications'];
                    this.router.navigate(link);
                });
            }
        }
        else {
            return;
        }
    }
    updateEntreprisePerson(id) {
        this._amService.updateEntreprisePerson(id).subscribe(() => {
            let link = ['/applications'];
            this.router.navigate(link);
        });
    }
    updateEntreprise() {
        this.entreprise[0].EntrepriseId = this.id;
        this.entreprise[0].CommentsEntreprise = this.comment;
        this._amService.updateCommentEntreprise(this.entreprise[0]).subscribe(() => {
            let link = ['/applications'];
            this.router.navigate(link);
        });
    }
    navigateWithId(linkSent, idSent) {
        this.manipulatingLink.emit({ link: linkSent, id: idSent });
    }
    reloadComponent() {
        let link = ['/applications'];
        this.router.navigate(link);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], CardEntrepriseComponent.prototype, "id", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CardEntrepriseComponent.prototype, "manipulatingLink", void 0);
CardEntrepriseComponent = __decorate([
    Component({
        selector: 'app-cardEntreprise-component',
        templateUrl: './cardEntreprise.component.html',
        styleUrls: ['../home/home.component.css']
    }),
    __metadata("design:paramtypes", [Router, ApplicationManagerService, ActivatedRoute])
], CardEntrepriseComponent);
export { CardEntrepriseComponent };
//# sourceMappingURL=cardEntreprise.component.js.map