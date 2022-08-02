import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationManagerService } from '../applicationmanager.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-cardApplication-component',
    templateUrl: './cardApplication.component.html',
    styleUrls: ['../home/home.component.css']

})
export class CardApplicationComponent {

    public application: [any];



    constructor(private router: Router, private _amService: ApplicationManagerService, private route: ActivatedRoute,) {

    }
    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this._amService.getApplication(id).subscribe(result => {


            console.log("oxi");
            this.application = result;
            console.log(this.application)


        }, error => console.error(error));


    }
}
