var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './applicationmanager/home/home.component';
import { EntreprisesComponent } from './applicationmanager/entreprises/entreprises.component';
import { ContactsComponent } from './applicationmanager/contacts/contacts.component';
import { DocumentsComponent } from './applicationmanager/documents/documents.component';
import { LoginComponent } from './applicationmanager/login/login.component';
import { FormApplicationComponent } from './applicationmanager/formApplication/formApplication.component';
import { FormEntrepriseComponent } from './applicationmanager/formEntreprise/formEntreprise.component';
import { FormPersonComponent } from './applicationmanager/formPerson/formPerson.component';
import { ProfileComponent } from './applicationmanager/profile/profile.component';
import { CardEntrepriseComponent } from './applicationmanager/cardEntreprise/cardEntreprise.component';
import { CardApplicationComponent } from './applicationmanager/cardApplication/cardApplication.component';
import { CardPersonComponent } from './applicationmanager/cardPerson/cardPerson.component';
import { ApplicationsComponent } from './applicationmanager/applications/applications.component';
const routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    //, canActivate: [AuthorizeGuard] 
    { path: 'applications', component: ApplicationsComponent },
    { path: 'entreprise', component: EntreprisesComponent },
    { path: 'document', component: DocumentsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'formApplication', component: FormApplicationComponent },
    { path: 'formEntreprise', component: FormEntrepriseComponent },
    { path: 'formPerson', component: FormPersonComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'contact', component: ContactsComponent },
    { path: 'cardEntreprise/:id', component: CardEntrepriseComponent },
    { path: 'cardApplication/:id', component: CardApplicationComponent },
    { path: 'cardPerson/:id', component: CardPersonComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            RouterModule.forRoot(routes),
        ],
        exports: [
            RouterModule
        ]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map