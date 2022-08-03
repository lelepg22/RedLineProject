import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Application } from './models/Application';
import { ApplicationEntreprisePerson } from './models/ApplicationEntreprisePerson';
import { Entreprises } from './models/Entreprises';
import { Persons } from './models/Persons';
import { PersonSent } from './models/PersonSent';
import { PersonsList } from './models/PersonsList';

@Injectable({
  providedIn: 'root'
})
export class ApplicationManagerService {

    private url = '/home';
    private url2 = '';


    constructor(private http: HttpClient) {
    }
    goHome(): Observable<[any]> {
        this.url = '/home'
        return this.http.get<[any]>(this.url);
    }
    goEntreprise(): Observable<[any]> {
        this.url = '/entreprises' 
        return this.http.get<[any]>(this.url);
    }
    goContact(): Observable<[any]> {
        this.url = '/contacts'
        return this.http.get<[any]>(this.url);
    }
    getEntrepriseNoApplication(id: any): Observable<[any]> {
        this.url = '/entreprises/get?id=' + id;
        return this.http.get<[any]>(this.url);
    }
    getEntreprisePerson(id: any): Observable<[any]> {        
        this.url = '/contacts/get?id=' + id;
        return this.http.get<[any]>(this.url);
    }
    getPersonDocEntreprise(): Observable<[any]> {
        this.url = 'home/form';
        return this.http.get<[any]>(this.url);
    }

    postApplication(data: ApplicationEntreprisePerson) {
        this.url = 'home/';
       //this.url2 = 'contacts/personSent';
        console.log(data);
        console.log('dada submit');
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        return this.http.post<ApplicationEntreprisePerson>(this.url, data, httpOptions);

       // this.http.post<PersonSent>(this.url2, person, httpOptions);
        
       
    
    }
    postEntreprise(data: Entreprises): Observable<ApplicationEntreprisePerson> {
        this.url = 'entreprises';
        console.log(data);
        console.log('dada submit');
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
       
        return this.http.post<ApplicationEntreprisePerson>(this.url, data, httpOptions);

    }
    postPerson(data: Persons): Observable<ApplicationEntreprisePerson> {
        this.url = '/contacts';
        console.log(data);
        console.log('dada submit');
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        return this.http.post<ApplicationEntreprisePerson>(this.url, data, httpOptions);

    }

    getEntreprise(id: number): Observable<[any]> {
        this.url = 'home/entreprise?id=' + id;
       
        return this.http.get<[any]>(this.url);

    }
    getPerson(id: number): Observable<[any]> {
        this.url = 'home/person?id=' + id;

        return this.http.get<[any]>(this.url);

    }
    getApplication(id: number): Observable<[any]> {
        this.url = 'home/application?id=' + id;

        return this.http.get<[any]>(this.url);

    }

    /*
    postTest(data: Application): Observable<Application> {
        
    console.log(data);
    console.log('dada ');
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        return this.http.post<Application>(this.url, data, httpOptions);

    }*/
}
