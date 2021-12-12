using System.ComponentModel.DataAnnotations.Schema;

namespace Tablet.Models
{
    public class Year
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Name { get; set; }
        public int GradeId { get; set; }
    }
}