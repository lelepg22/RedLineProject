using ProjetRedLineAG.Models;
using System;

namespace ProjetRedLineAG
{
    public class Application
    {
        public int Id;
        public string TitleApplication;
        public string StatusApplication;
       /* public string CommentsApplication;
        public string ExternalLinkApplication; */
        public DateTime TimeApplication;
        public string EntrepriseApplication;

        public Application()
        {
            TitleApplication = this.TitleApplication;
            StatusApplication = this.StatusApplication;
            TimeApplication = this.TimeApplication;
            EntrepriseApplication = this.EntrepriseApplication;
        }
    }
}
