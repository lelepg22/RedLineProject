var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { LoginComponent } from './login/login.component';
import { FormApplicationComponent } from './formApplication/formApplication.component';
import { FormEntrepriseComponent } from './formEntreprise/formEntreprise.component';
import { FormPersonComponent } from './formPerson/formPerson.component';
import { ProfileComponent } from './profile/profile.component';
import { CardEntrepriseComponent } from './cardEntreprise/cardEntreprise.component';
import { CardPersonComponent } from './cardPerson/cardPerson.component';
import { CardApplicationComponent } from './cardApplication/cardApplication.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { ApplicationManagerService } from './applicationmanager.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ApplicationsComponent } from './applications/applications.component';
import { StatutsComponent } from './statuts/statuts.component';
let ApplicationManagerModule = class ApplicationManagerModule {
};
ApplicationManagerModule = __decorate([
    NgModule({
        declarations: [
            SearchBarComponent
        ],
        imports: [
            CommonModule,
            HttpClientModule,
            FormsModule,
            ApiAuthorizationModule,
            AppRoutingModule,
            RouterModule,
            HomeComponent,
            BrowserModule,
            EntreprisesComponent,
            ContactsComponent,
            DocumentsComponent,
            LoginComponent,
            FormApplicationComponent,
            FormEntrepriseComponent,
            FormPersonComponent,
            ProfileComponent,
            CardEntrepriseComponent,
            CardPersonComponent,
            CardApplicationComponent,
            FilterPipe,
            ApplicationsComponent,
            StatutsComponent,
            AppComponent,
            NavMenuComponent,
            AuthorizeGuard
        ],
        providers: [
            { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
            ApplicationManagerService
        ],
    })
], ApplicationManagerModule);
export { ApplicationManagerModule };
//# sourceMappingURL=applicationmanager.module.js.map