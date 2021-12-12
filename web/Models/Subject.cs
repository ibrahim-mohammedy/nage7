using System.ComponentModel.DataAnnotations.Schema;

namespace Tablet.Models
{
    public class Subject
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Name { get; set; }
        public int YearId { get; set; }
    }
}