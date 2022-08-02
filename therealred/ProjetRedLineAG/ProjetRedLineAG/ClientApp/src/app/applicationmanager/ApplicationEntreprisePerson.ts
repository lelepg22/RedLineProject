import { Entreprises } from "./Entreprises";
import { Persons } from "./Persons";

export class ApplicationEntreprisePerson {

    Id: number;
    TitleApplication: string;
    CommentsApplication: string;
    ExternalLinkApplication: string;
    StatusApplication: string;
    TimeApplication: Date = new Date();
    EntrepriseId: number = 2 ;
    //Entreprise: any = { EntrepriseId: 2 };
    Person: [object] = [{}];
    personSent: [object] = [{}];
    

}