import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationManagerService } from '../applicationmanager.service';
import { Application } from '../models/Application';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public applications : [any];
    public application: Application;
    public link: string = "applications";

    public applicationsList: boolean = true;
   
    public documents: boolean = false;
    public contacts: boolean = false;
  
    constructor(private router: Router, private _amService: ApplicationManagerService) {
    
    }
    ngOnInit(): void {

        this._amService.goHome().subscribe(result => {
            
            console.log(result);
            this.applications = result;
            

        }, error => console.error(error));

    }
    goCardApplication(id: any) {
       
        this.router.navigateByUrl('/cardApplication/' + id);
    }

    access(value: string) {
        this.link = value;
    }

   
}