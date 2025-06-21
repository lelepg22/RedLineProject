var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { debug } from 'console';
let ApplicationManagerService = class ApplicationManagerService {
    http;
    url = '/home';
    url2 = '';
    constructor(http) {
        this.http = http;
    }
    //main-page
    goHome() {
        this.url = '/home';
        return this.http.get(this.url);
    }
    goEntreprise() {
        this.url = '/entreprises';
        return this.http.get(this.url);
    }
    goContact() {
        this.url = '/contacts';
        return this.http.get(this.url);
    }
    goDocuments() {
        this.url = '/documents';
        return this.http.get(this.url);
    }
    goStatuts() {
        this.url = '/contacts/statuts';
        return this.http.get(this.url);
    }
    //get's by id
    getApplicationDocSent(id) {
        this.url = '/home/documentsent?id=' + id;
        return this.http.get(this.url);
    }
    getApplicationPersonSent(id) {
        this.url = '/contacts/personsent?id=' + id;
        return this.http.get(this.url);
    }
    getEntrepriseNoApplication(id) {
        this.url = '/entreprises/get?id=' + id;
        return this.http.get(this.url);
    }
    getEntreprisePerson(id) {
        this.url = '/contacts/get?id=' + id;
        return this.http.get(this.url);
    }
    getEntreprise(id) {
        this.url = 'home/entreprise?id=' + id;
        return this.http.get(this.url);
    }
    getPerson(id) {
        this.url = 'contacts/persons?id=' + id;
        return this.http.get(this.url);
    }
    getStatut(id) {
        this.url = 'contacts/statut?id=' + id;
        return this.http.get(this.url);
    }
    getApplication(id) {
        this.url = 'home/application?id=' + id;
        return this.http.get(this.url);
    }
    //Data-filler
    getContacts() {
        this.url = 'contacts/person';
        return this.http.get(this.url);
    }
    getDocs() {
        this.url = 'home/docs';
        return this.http.get(this.url);
    }
    getPersonDocEntreprise() {
        this.url = 'home/form';
        return this.http.get(this.url);
    }
    //delete
    deletePerson(id) {
        this.url = 'contacts/delete?id=' + id;
        return this.http.delete(this.url);
    }
    deleteApplication(id) {
        this.url = 'home/delete?id=' + id;
        return this.http.delete(this.url);
    }
    deleteDocumentSent(id) {
        this.url = 'documents/sent/delete?id=' + id;
        return this.http.delete(this.url);
    }
    deleteDocument(id) {
        this.url = 'documents/delete?id=' + id;
        return this.http.delete(this.url);
    }
    deleteStatut(id) {
        this.url = 'contacts/statut/delete?id=' + id;
        return this.http.delete(this.url);
    }
    deletePersonSent(id) {
        this.url = 'contacts/sent/delete?id=' + id;
        return this.http.delete(this.url);
    }
    deleteEntreprise(id) {
        this.url = 'entreprises/delete?id=' + id;
        return this.http.delete(this.url);
    }
    //put
    updateApplication(data) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.url = '/home';
        console.log(data);
        console.log('dapplic');
        if (data[0]) {
            return this.http.put(this.url, data[0], httpOptions);
        }
        else {
            return this.http.put(this.url, data, httpOptions);
        }
    }
    updateCommentEntreprise(data) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.url = '/entreprises/comment';
        console.log(data);
        console.log('dapplic');
        return this.http.put(this.url, data, httpOptions);
    }
    updateEntreprisePerson(id) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.url = '/entreprises/persons?id=' + id;
        console.log(id);
        console.log('dapplic');
        return this.http.put(this.url, id, httpOptions);
    }
    updatePerson(data) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.url = '/contacts/update';
        console.log(data);
        console.log('dapplic');
        return this.http.put(this.url, data, httpOptions);
    }
    // Posts
    postApplication(data) {
        this.url = 'home/';
        //this.url2 = 'contacts/personSent';
        console.log(data);
        console.log('dada submit');
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.url, data, httpOptions);
        // this.http.post<PersonSent>(this.url2, person, httpOptions);     
    }
    postEntreprise(data) {
        this.url = 'entreprises';
        console.log(data);
        console.log('dada submit');
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.url, data, httpOptions);
    }
    postPerson(data) {
        this.url = '/contacts';
        console.log(data);
        console.log('dada submit');
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.url, data, httpOptions);
    }
    postPersonSent(data) {
        this.url = '/Contacts/sent';
        console.log(data);
        console.log('dada submit');
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.url, data, httpOptions);
    }
    postStatut(data) {
        this.url = '/Contacts/statut';
        console.log(data);
        console.log('dada submit');
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.url, data, httpOptions);
    }
    postDocSent(data) {
        this.url = '/documents/sent';
        console.log(data);
        console.log('dada submit');
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.url, data, httpOptions);
    }
    postDocument(data) {
        this.url = '/documents';
        console.log(data);
        console.log('dada submit');
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post(this.url, data, httpOptions);
    }
};
ApplicationManagerService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], ApplicationManagerService);
export { ApplicationManagerService };
//# sourceMappingURL=applicationmanager.service.js.map