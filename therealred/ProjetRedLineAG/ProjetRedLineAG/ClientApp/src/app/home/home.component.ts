import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    public applications: Application[];

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {
        http.get<Application[]>(baseUrl + 'home').subscribe(result => {
            console.log(result);
            this.applications = result;

        }, error => console.error(error));
    }

    test2() {

    }
    public test(x) {
        alert(x)
        this.router.navigateByUrl('/cardApplication/' + x)

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
