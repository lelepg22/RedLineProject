using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProjetRedLineAG.Data;
using ProjetRedLineAG.Models;
using System.Collections;
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
            /*_context.Applications.Add(new ApplicationModel
            {
                TitleApplication = "Front",
              
            });*/

            await _context.SaveChangesAsync();

            var res = _context.Application.Include(s => s.Entreprise).ToListAsync();
                //.Include(s => s.Entreprise)



            return await res;

        }
        [HttpGet("entreprise/")]
        public async Task<IEnumerable<ApplicationModel>> GetEntreprise(int id)
        {
            var res = _context.Application.Where(e=> e.EntrepriseId == id)                
                .Include(s=> s.Entreprise)
                .Include(s=>s.Person)
                .ToListAsync();

            return await res; 
       
        }
        [HttpGet("application/")]
        public async Task<IEnumerable<ApplicationModel>> GetApplication(int id)
        {
            var res = _context.Application
                .Include(s => s.DocumentSent).ThenInclude(x => x.Document)
                .ToListAsync();

            return await res;

        }
        [HttpGet("form/")]
        public async Task<IEnumerable<IEnumerable>> GetForm()
        {
            IEnumerable[] resu;

            resu = new IEnumerable[] { await _context.Entreprise.ToListAsync().ConfigureAwait(false), 
                await _context.Person.ToListAsync().ConfigureAwait(false), await _context.Document.ToListAsync().ConfigureAwait(false), 
                await _context.Statut.ToListAsync().ConfigureAwait(false) };

            return resu;

        }

        //[Authorize]
        [HttpPost]
        public async Task<ActionResult<ApplicationModel>> PostApplication(ApplicationModel data)

        {

            _context.Application.Add(data);
           
            await _context.SaveChangesAsync();

            return CreatedAtAction("Get", new { id = data.ApplicationId }, data);
         
        }

    }
}
