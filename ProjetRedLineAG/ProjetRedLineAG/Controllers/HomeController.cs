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
    public class HomeController : ControllerBase {

        private readonly ApplicationsContext _context;
        public HomeController(ApplicationsContext context)
        {
            _context = context;
        }


        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public  IEnumerable<List<Application>> Get()
        {
           public List<Application> applicationsList = new List<Application>();
           applicationsList.Add

             var a = _context.Applications.ToListAsync();
           
           await requeteBaseApplications() {

                    if (_context.Applications == null)
                    {
                       
                        await Parallel.ForEachAsync(_context.Applications, async (item , CancellationToken) =>{
                           
                        })

                    }

            
                }
            }
            await  applicationsList.ForEach(var item in applicationsList){
                await requeteEntreprises() { res => var entreprise = res.Where(x => item.Entreprise == x.Id).ToArray();  item.entreprise.TitleEntreprise.toString();
                
                }
            return applicationsList.ToArray();
        }
            
            

        }
    }
}
