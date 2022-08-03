import { Component, Inject, OnInit } from '@angular/core';
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
    

    constructor(private router: Router, private _amService: ApplicationManagerService) {
    
    }
    ngOnInit(): void {

        this._amService.goHome().subscribe(result => {
            
            console.log(result);
            this.applications = result;
            

        }, error => console.error(error));

    }
   
       /*
        this._amService.postTest(this.application).subscribe(() => {
            alert('treg');
            console.log(this.application);
        })
    }
    
    public navigate(x) {
        alert(x)
        this.router.navigateByUrl('/cardApplication/' + x)

    }


}*/
   
}