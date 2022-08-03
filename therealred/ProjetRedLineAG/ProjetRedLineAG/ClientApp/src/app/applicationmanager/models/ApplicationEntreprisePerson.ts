;

export class ApplicationEntreprisePerson {

    Id: number;
    TitleApplication: string;
    CommentsApplication: string;
    ExternalLinkApplication: string;
    StatusApplication: string = "ouvert";
    TimeApplication: Date = new Date();
    EntrepriseId: number = 2 ;    
    documentSent: [object] = [{}];
    personSent: [object] = [{}];    
    

}