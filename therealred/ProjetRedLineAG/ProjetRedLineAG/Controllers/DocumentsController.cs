using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProjetRedLineAG.Data;
using ProjetRedLineAG.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProjetRedLineAG.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DocumentsController : ControllerBase
    {

        private readonly ApplicationsContext _context;
        public DocumentsController(ApplicationsContext context)
        {
            _context = context;
        }


        private readonly ILogger<DocumentsController> _logger;

        /*public EntreprisesController(ILogger<EntreprisesController> logger)
        {
            _logger = logger;
        }*/

        [HttpGet]

        /*public async IEnumerable<List<Application>> Get()
        {

            //apllisList.Select(r => apllisList.Select(x => x.EntrepriseId.ToString() == entreprisesList.Where(y => x.EntrepriseId == y.Id).ToString()));

            if (_context.Applications == null)
            {
                var apllisList = await _context.Applications.ToListAsync();


                List<Application> list = new List<Application>();
                apllisList.ForEach(x => list.Add(new Application()
                {
                    Id = x.Id,
                    TitleApplication = x.TitleApplication,
                    EntrepriseApplication = x.EntrepriseName,
                    StatusApplication = x.StatusApplication,
                    TimeApplication = x.TimeApplication,
                }));

                return list.ToArray();
            }
            return new[] { new Application() };


        }
        }*/

        public async Task<IEnumerable<DocumentModel>> Get()
        {

            var res = _context.Document.ToListAsync();
            return await res;
        }
    }
}
