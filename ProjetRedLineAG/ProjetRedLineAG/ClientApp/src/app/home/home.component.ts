import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    public applications: Application[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        http.get<Application[]>(baseUrl + 'home').subscribe(result => {           
            console.log(result);            
            this.applications = result; 
            
        }, error => console.error(error));
    }
    public test(x) {
       

    }

}

interface Application {
    Id: number;
    TitleApplication: string;
    StatusApplication: string;
    TimeApplication: Date;
    EntrepriseApplication: string;
    Entreprise: string;

}

