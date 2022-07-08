using System;
using System.ComponentModel.DataAnnotations;
namespace ProjetRedLineAG.Models
{
    public class ApplicationModel
    {
        public int Id { get; set; }
        public string TitleApplication { get; set; }
        public string StatusApplication { get; set; }
        public string CommentsApplication { get; set; }
        public string ExternalLinkApplication { get; set; }
        public int EntrepriseId { get; set; }

        public string EntrepriseName { get; set; }

        /* [DataType(DataType.DateTime2)] */
        public DateTime TimeApplication { get; set; }


    }
}
