import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-documents-component',
    templateUrl: './documents.component.html',
    styleUrls: ['../home/home.component.css']

})
export class DocumentsComponent {
    public documents: Document[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<Document[]>(baseUrl + 'documents').subscribe(result => {
            console.log(result);           
            this.documents = result;
        }, error => console.error(error));
    }
}

interface Document {
    Id: number;
    TitleDocument: string;

}
