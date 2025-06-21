;
export class ApplicationEntreprisePerson {
    Id;
    TitleApplication;
    CommentsApplication;
    ExternalLinkApplication;
    StatusApplication = "ouvert";
    TimeApplication = new Date();
    EntrepriseId = 1;
    documentSent = [{ DocumentId: 0, ApplicationId: 0 }];
    personSent = [{ PersonId: 0, ApplicationId: 0 }];
}
//# sourceMappingURL=ApplicationEntreprisePerson.js.map