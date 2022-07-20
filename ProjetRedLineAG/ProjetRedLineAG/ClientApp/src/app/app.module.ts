import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { LoginComponent } from './login/login.component';
import { FormApplicationComponent } from './formApplication/formApplication.component';
import { FormEntrepriseComponent } from './formEntreprise/formEntreprise.component';
import { FormPersonComponent } from './formPerson/formPerson.component';
import { ProfileComponent } from './profile/profile.component';
import { CardEntrepriseComponent } from './cardEntreprise/cardEntreprise.component';
import { CardApplicationComponent } from './cardApplication/cardApplication.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EntreprisesComponent,
    ContactsComponent,
    DocumentsComponent,
    LoginComponent,
    FormApplicationComponent,
    FormEntrepriseComponent,
    FormPersonComponent,
    ProfileComponent,
    CardEntrepriseComponent,
    CardApplicationComponent


    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactsComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'entreprise', component: EntreprisesComponent },
      { path: 'document', component: DocumentsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'formApplication', component: FormApplicationComponent },
      { path: 'formEntreprise', component: FormEntrepriseComponent },
      { path: 'formPerson', component: FormPersonComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'cardEntreprise', component: CardEntrepriseComponent },
      { path: 'cardApplication', component: CardApplicationComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
