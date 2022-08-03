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
    public class EntreprisesController : ControllerBase
    {

        private readonly ApplicationsContext _context;
        public EntreprisesController(ApplicationsContext context)
        {
            _context = context;
        }


        private readonly ILogger<EntreprisesController> _logger;

        /*public EntreprisesController(ILogger<EntreprisesController> logger)
        {
            _logger = logger;
        }*/

        [HttpGet]
        public async Task<IEnumerable<EntrepriseModel>> Get()
        {

            var res = _context.Entreprise.ToListAsync();
            return await res;
        }

        [HttpGet("get/")]
        public async Task<IEnumerable<EntrepriseModel>> GetEntreprise(int id)
        {
            var res = _context.Entreprise.Where(e => e.EntrepriseId == id) .ToListAsync();

            return await res;

        }

        [HttpPost]
        public async Task<ActionResult<EntrepriseModel>> PostEntreprises(EntrepriseModel data)

        {
            _context.Entreprise.Add(data);

            await _context.SaveChangesAsync();

            return CreatedAtAction("Get", new { id = data.EntrepriseId }, data);
            ;

        }

        //HttpPost
        //Sauvegarder une entreprise

        /*[HttpGet("entreprise/{id}")]
        public async Task<IEnumerable<EntrepriseModel>> GetEntreprise(int id)
        {

            var res = _context.Entreprises.Include(s => s.Person).Include(s => s.Application).Where(s=> s.EntrepriseId == id).Where(s=> s.EntrepriseId == s.Application.EntrepriseId)
                .Where(s=> s.EntrepriseId == s.Person.EntrepriseId).ToListAsync();
            return await res;
        }*/

    }
}
