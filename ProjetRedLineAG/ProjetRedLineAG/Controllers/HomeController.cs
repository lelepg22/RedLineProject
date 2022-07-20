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
            var res = _context.Applications.Where(s=> s.EntrepriseId==s.Entreprise.EntrepriseId)
                .Include(s => s.Entreprise).ToListAsync() ;
           
                
            
            return await res;
            
        }
        [HttpPost]
        public async Task<ActionResult<Application>> PostEmployee(ApplicationModel data)

        {

            _context.Applications.Add(data);

            await _context.SaveChangesAsync();



            return CreatedAtAction("Get", new { id= data.Id}, data) ;

        }
  
    }
}
 