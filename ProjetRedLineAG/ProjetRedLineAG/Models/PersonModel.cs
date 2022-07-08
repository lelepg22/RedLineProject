namespace ProjetRedLineAG.Models
{
    public class PersonModel
    {
        public int Id { get; set; }

        public int EntrepriseId { get; set; }

        public string LastNamePerson { get; set; }
        public string FirstNamePerson { get; set; }
        public string StatutPerson { get; set; }
        public string TelPerson { get; set; }
        public string EmailPerson { get; set; }
        public string CommentsPerson { get; set; }
    }
}
