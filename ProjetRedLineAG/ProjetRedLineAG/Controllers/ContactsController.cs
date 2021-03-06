using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProjetRedLineAG.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProjetRedLineAG.Data;
using Microsoft.EntityFrameworkCore;

namespace ProjetRedLineAG.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactsController : ControllerBase
    {

        private readonly ApplicationsContext _context;
        public ContactsController(ApplicationsContext context)
        {
            _context = context;
        }


        private readonly ILogger<ContactsController> _logger;

        /*public ContactsController(ILogger<ContactsController> logger)
        {
            _logger = logger;
        }
        */
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

        public async Task<IEnumerable<PersonModel>> Get()
        {
            var res = _context.Persons.Where(s=> s.EntrepriseId==s.Entreprise.EntrepriseId)
                .Include(s=> s.Entreprise).ToListAsync();
            return await res;
        }
    }
}
 