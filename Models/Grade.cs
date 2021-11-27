using System.ComponentModel.DataAnnotations.Schema;

namespace Tablet.Models
{
    public class Grade
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Name { get; set; }
    }
}