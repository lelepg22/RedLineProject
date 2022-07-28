using Microsoft.AspNetCore.Authorization;
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
    public class HomeController : ControllerBase
    {

        private readonly ApplicationsContext _context;
        public HomeController(ApplicationsContext context)
        {
            _context = context;
        }


        private readonly ILogger<HomeController> _logger;

        /* public HomeController(ILogger<HomeController> logger)
         {
             _logger = logger;
         }*/

        [HttpGet]
        public async Task<IEnumerable<ApplicationModel>> Get()
        {
            _context.Applications.Add(new ApplicationModel
            {
                TitleApplication = "Front",
                EntrepriseId = 1
            });

            await _context.SaveChangesAsync();

            var res = _context.Applications.Where(s => s.EntrepriseId == s.Entreprise.EntrepriseId)
                .Include(s => s.Entreprise).ToListAsync();



            return await res;

        }
        [HttpGet("entreprise/")]
        public async Task<IEnumerable<ApplicationModel>> GetEntreprise(int id)
        {
            var res = _context.Applications.Where(s=>s.Entreprise.EntrepriseId == id)
                .Where(s=> (s.EntrepriseId == id)).Where(s=> s.Person.EntrepriseId == id)
                .Include(e=> e.Entreprise).Include(p => p.Person).ToListAsync();
            return await res;
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Application>> PostEmployee(ApplicationModel data)

        {

            _context.Applications.Add(data);

            await _context.SaveChangesAsync();

            return CreatedAtAction("Get", new { id = data.Id }, data);

        }

    }
}
