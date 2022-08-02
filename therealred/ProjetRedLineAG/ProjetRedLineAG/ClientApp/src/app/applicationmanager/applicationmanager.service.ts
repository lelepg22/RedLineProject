import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Application } from './Application';
import { ApplicationEntreprisePerson } from './ApplicationEntreprisePerson';
import { Entreprises } from './Entreprises';
import { Persons } from './Persons';
import { PersonSent } from './PersonSent';

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
    getPersonDocEntreprise(): Observable<[any]> {
        this.url = 'home/form';
        return this.http.get<[any]>(this.url);
    }

    postApplication(data: ApplicationEntreprisePerson): Observable<ApplicationEntreprisePerson> {
        this.url = 'home/';
        this.url2 = 'contacts/personSent';
        console.log(data);
        console.log('dada submit');
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
        this.http.post<PersonSent>(this.url2, data.personSent, httpOptions)
        
        return this.http.post<ApplicationEntreprisePerson>(this.url, data, httpOptions);
    
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
