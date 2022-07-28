using System.Text.Json.Serialization;

namespace ProjetRedLineAG.Models
{
    public class PersonModel
    {

        public PersonModel()
        {
            EntrepriseId = 1;
        }
        public int Id { get; set; }
        public string LastNamePerson { get; set; }
        public string FirstNamePerson { get; set; }
        public string StatutPerson { get; set; }
        public string TelPerson { get; set; }
        public string EmailPerson { get; set; }
        public string CommentsPerson { get; set; }
        public int? EntrepriseId { get; set; }

        [JsonIgnore]
        public EntrepriseModel Entreprise { get; set; }
    }
}
