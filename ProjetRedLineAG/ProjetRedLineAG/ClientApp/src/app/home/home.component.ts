import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
    public applications: Application[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<Application[]>(baseUrl + 'home').subscribe(result => {
            console.log(result);
            alert(result);
            debugger;
            this.applications = result;
        }, error => console.error(error));
    }
}

interface Application {
    Id: number;
    TitleApplication: string;
    StatusApplication: string;
    TimeApplication: Date;
    EntrepriseApplication: string;

}

