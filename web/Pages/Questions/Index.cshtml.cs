using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ElTablet.Models;
using Tablet.Data;

namespace ElTablet.Pages.Questions
{
    public class IndexModel : PageModel
    {
        private readonly Tablet.Data.ApplicationDbContext _context;

        public IndexModel(Tablet.Data.ApplicationDbContext context)
        {
            _context = context;
        }

        public IList<Question> Question { get;set; }

        public async Task OnGetAsync()
        {
            Question = await _context.Question.ToListAsync();
        }
    }
}
