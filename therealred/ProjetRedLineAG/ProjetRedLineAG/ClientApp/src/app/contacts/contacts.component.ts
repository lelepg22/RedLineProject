import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts-component',
    templateUrl: './contacts.component.html',
    styleUrls: ['../home/home.component.css']

})
export class ContactsComponent {
    public contacts: Contact[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<Contact[]>(baseUrl + 'contacts').subscribe(result => {
            console.log(result);           
            this.contacts = result;
        }, error => console.error(error));
    }
}

interface Contact {
    Id: number;
    EntrepriseId: string;
    LastNamePerson: string;
    FirstNamePerson: string;
    TelPerson: string;
    EmailPerson: string;
    StatutPerson: string;
    Entreprise: string;

}
