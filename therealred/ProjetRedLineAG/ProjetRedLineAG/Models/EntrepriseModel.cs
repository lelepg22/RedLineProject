using System.ComponentModel.DataAnnotations;

namespace ProjetRedLineAG.Models
{
    public class EntrepriseModel
    {
        [Key]
        public int EntrepriseId { get; set; }
        public string TitleEntreprise { get; set; }
        public string CommentsEntreprise { get; set; }
        public string LinkEntreprise { get; set; }
        public string TelEntreprise { get; set; }
        public string EmailEntreprise { get; set; }
               

    }
}
