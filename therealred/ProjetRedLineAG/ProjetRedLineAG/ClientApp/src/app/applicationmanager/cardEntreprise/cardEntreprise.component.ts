import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationManagerService } from '../applicationmanager.service';


@Component({
    selector: 'app-cardEntreprise-component',
    templateUrl: './cardEntreprise.component.html',
    styleUrls: ['../home/home.component.css']

})
export class CardEntrepriseComponent implements OnInit {

    public entreprises: [any];
    public entreprise: [any] = [{}];
    public persons: [any];
    public edit: boolean = false;
    public comment: string;
    
    
    


    constructor(private router: Router, private _amService: ApplicationManagerService, private route: ActivatedRoute,) {

    }
    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this._amService.getEntreprisePerson(id).subscribe(result => {
            
            console.log('batato');
            console.log(result);
            this.persons = result;
            console.log(this.persons);
        })
        this._amService.getEntreprise(id).subscribe(result => {
          

            if (result.length < 1) {
                 this._amService.getEntrepriseNoApplication(id).subscribe(result => {
                  
                   console.log('biito');
                    console.log(result);
                   
                     this.entreprise = result;
                    
                    console.log(this.entreprise);
                 });
                return 

            }
            console.log("oxi");
            
            this.entreprises = result;
            console.log(this.entreprises)


        }, error => console.error(error));


    }
    editEntreprise() {
        this.edit = true;

    }
    updateEntreprisePerson(id: number) {
        this._amService.updateEntreprisePerson(id).subscribe(() => {
            let link = ['/'];
            this.router.navigate(link);
        })

    }
    updateComment() {
        this.entreprise[0].EntrepriseId = +this.route.snapshot.params['id'];       
        this.entreprise[0].CommentsEntreprise = this.comment; 
        this._amService.updateCommentEntreprise(this.entreprise[0]).subscribe(() => {
            let link = ['/'];
            this.router.navigate(link);
        })
}

}
