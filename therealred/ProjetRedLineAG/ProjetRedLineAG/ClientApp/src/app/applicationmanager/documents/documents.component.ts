import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationManagerService } from '../applicationmanager.service';
import { Router } from '@angular/router';
import { Documents } from '../models/Documents';

@Component({
    selector: 'app-documents-component',
    templateUrl: './documents.component.html',
    styleUrls: ['../home/home.component.css']

})
export class DocumentsComponent implements OnInit {
    public documents: Document[];
    public newDoc: any;
    public add: boolean = false;


    constructor(
        private _amService: ApplicationManagerService,
        private router: Router) { }

    ngOnInit() {
        this._amService.goDocuments().subscribe(result => {
            console.log(result);
            this.documents = result;
        }, error => console.error(error));
        this.newDoc = new Documents;
    }
    
    deleteDocument(id: number) {
        let text = "Supprimer ?";

        if (confirm(text) == true) {

            this._amService.deleteDocument(id).subscribe(() => {
                let link = ['/'];
                this.router.navigate(link);
            })

        } else {
            return
        }
        
    }
    addDoc() {
        this.add = true;
    }
    goDoc() {
        this._amService.postDocument(this.newDoc).subscribe(() => {
            let link = ['/document'];
            this.router.navigate(link);
        })

    }

}

interface Document {
    Id: number;
    TitleDocument: string;

}
