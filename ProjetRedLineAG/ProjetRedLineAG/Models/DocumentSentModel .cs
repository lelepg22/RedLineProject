using System.ComponentModel.DataAnnotations;

namespace ProjetRedLineAG.Models
{
    public class DocumentSentModel
    {
        [Key]
        public int Id { get; set; }
        public int DocumentId { get; set; }       
        public int ApplicationId { get; set; }
    }
}
