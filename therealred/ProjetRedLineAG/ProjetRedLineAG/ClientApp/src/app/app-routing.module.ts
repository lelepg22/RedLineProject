import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './applicationmanager/home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
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


const routes: Routes = [

    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
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
    // manque cardPerson/:id
    // manque 
]

@NgModule({
  declarations: [],
  imports: [     
      RouterModule.forRoot(routes),
  ],
    exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
