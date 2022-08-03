import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApplicationManagerService } from '../applicationmanager.service';

@Component({
  selector: 'app-entreprises-component',
    templateUrl: './entreprises.component.html',
    styleUrls: ['../home/home.component.css']

})
export class EntreprisesComponent implements OnInit {
    public entreprises: [any];

    constructor(private router: Router, private _amService: ApplicationManagerService) {
      
    }
    ngOnInit(): void {
        this._amService.goEntreprise().subscribe(result => {
            console.log(result);
            this.entreprises = result;
        }, error => console.error(error));
    }
    goCardEntreprise(x: any) {
        
        this.router.navigateByUrl('/cardEntreprise/' + x)
    }

}

