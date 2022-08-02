import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entreprises-component',
    templateUrl: './entreprises.component.html',
    styleUrls: ['../home/home.component.css']

})
export class EntreprisesComponent {
    public entreprises: Entreprise[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<Entreprise[]>(baseUrl + 'entreprises').subscribe(result => {
            console.log(result);           
            this.entreprises = result;
        }, error => console.error(error));
    }
}

interface Entreprise {
    Id: number;
    TitleEntreprise: string;
    CommentsEntreprise: string;
    LinkEntreprise: string;
    TelEntreprise: string;

}
