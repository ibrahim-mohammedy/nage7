using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ElTablet.Models
{
    public class Question
    {
        public int Id { get; set; }

        [Display(Name = "رأس السؤال")]
        public string Title { get; set; }

        [Display(Name = "السؤال")]
        public string Body { get; set; }

        [Display(Name = "الإجابات")]
        public string Answers { get; set; }

        [Display(Name = "أضيف بواسطة")]
        public string CreatedBy { get; set; }
    }
}