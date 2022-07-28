using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProjetRedLineAG.Data;
using ProjetRedLineAG.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        public async Task<IEnumerable<PersonModel>> Get()
        {
            var res = _context.Persons.Where(s => s.EntrepriseId == s.Entreprise.EntrepriseId)
                .Include(s => s.Entreprise).ToListAsync();
            return await res;
        }
    }
}
