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
    public class ContactsController : ControllerBase
    {

        private readonly ApplicationsContext _context;
        public ContactsController(ApplicationsContext context)
        {
            _context = context;
        }


        private readonly ILogger<ContactsController> _logger;


        [HttpPost]
        public async Task<ActionResult<EntrepriseModel>> PostPerson(PersonModel data)

        {
            _context.Person.Add(data);

            await _context.SaveChangesAsync();

            return CreatedAtAction("Get", new { id = data.Id }, data);
            

        }
        [HttpGet]
        public async Task<IEnumerable<PersonModel>> GetContacts()
        {
            var res = _context.Person.Include(e=> e.Entreprise).ToListAsync();

            return await res;

        }
        [HttpGet("person/")]
        public async Task<IEnumerable<PersonModel>> GetContactsPure()
        {
            var res = _context.Person.ToListAsync();

            return await res;

        }
        [HttpGet("personsent/")]
        public async Task<IEnumerable<PersonSentModel>> GetContactsApplication(int id)
        {
            var res = _context.PersonSent.Where(p => p.ApplicationId == id)               
                .ToListAsync();

            return await res;

        }

        [HttpPut("edit/")]
        public async Task<ActionResult<PersonSentModel>> UpdateApplication(PersonSentModel data)

        {

            _context.Entry(data).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return CreatedAtAction("Get", new { id = data.ApplicationId }, data);

        }


        [HttpGet("get/")]
        public async Task<IEnumerable<PersonModel>> GetContact(int id)
        {
            var res = _context.Person.Where(e => e.EntrepriseId == id).ToListAsync();

            return await res;

        }

        /*[HttpPost("personSent/")]
        public async Task<ActionResult<EntrepriseModel>> PostPersonSent(PersonSentModel data)

        {

            _context.PersonSent.Add(data);

            await _context.SaveChangesAsync();

            return CreatedAtAction("Get", new { id = data.Id }, data);
            ;

        }
        */
        /*public ContactsController(ILogger<ContactsController> logger)
        {
            _logger = logger;
        }
        *//*
        
        [HttpGet]

        public async Task<IEnumerable<PersonModel>> Get()
        {
            var res = _context.Person.ToListAsync();
            return await res;
        }
        */
    }
}
