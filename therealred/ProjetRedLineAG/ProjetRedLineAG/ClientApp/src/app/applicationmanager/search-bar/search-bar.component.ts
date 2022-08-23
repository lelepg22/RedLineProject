import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
    @Input() applications: any;

    @Output() manipulatingLink = new EventEmitter<string>();

    public type: string = "Type";
    public typeId: number = 0;
    public search: boolean = false;

    public searchTitleApplication: boolean = false;
    public searchDateApplication: boolean = false;
    public searchEntrepriseApplication: boolean = false;
    public searchStatusApplication: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() {
      
    }

    goForm() {

        this.manipulatingLink.emit('formApp');

    }

    filterTitle() {
        this.search = true;
        this.typeId = 1;
        this.type = "Titre Candidature";
        this.searchTitleApplication = true;
        this.searchEntrepriseApplication = false;
        this.searchStatusApplication = false;
    }
    filterEntreprise() {
        this.search = true;
        this.typeId = 2;
        this.type = "Entreprise";
        this.searchEntrepriseApplication = true;
        this.searchTitleApplication = false;
        this.searchStatusApplication = false;
    }
    filterStatus() {
        this.search = true;
        this.typeId = 3;
        this.type = "Status";
        this.searchStatusApplication = true;
        this.searchEntrepriseApplication = false;
        this.searchTitleApplication = false;
    }
    public navigate(x) {

        this.router.navigateByUrl(x);

    }


}
