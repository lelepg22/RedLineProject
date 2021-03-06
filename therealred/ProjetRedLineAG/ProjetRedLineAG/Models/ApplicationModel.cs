using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetRedLineAG.Models
{
    public class ApplicationModel
    {
        public ApplicationModel()
        {
            TimeApplication = DateTime.Now;
        }

        [Key]
        public int Id { get; set; }
        public string TitleApplication { get; set; }
        public string StatusApplication { get; set; }
        public string? CommentsApplication { get; set; }
        public string ExternalLinkApplication { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "0:dd-MM-yyyy")]
        public DateTime TimeApplication { get; set; }

        public int? EntrepriseId { get; set; }
        public EntrepriseModel Entreprise { get; set; }
    }
}
