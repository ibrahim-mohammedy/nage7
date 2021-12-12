using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using ElTablet.Models;

namespace Tablet.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<ElTablet.Models.Question> Question { get; set; }

        public DbSet<ElTablet.Models.Exam> Exam { get; set; }
    }
}