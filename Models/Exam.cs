using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Tablet.Models;

namespace ElTablet.Models
{
    public class Exam
    {
        public int Id { get; set; }
        [Display(Name = "الإسم")]
        public string Title { get; set; }
        public int TypeId { get; set; }

        [Display(Name = "أضيف بواسطة")]
        public string CreatedBy { get; set; }

        public int SubjectId { get; set; }

        [Display(Name = "نوع الاختبار")]
        [NotMapped]
        public ExamType Type
        {
            get
            {
                return (ExamType)TypeId;
            }
            set
            {
                TypeId = (int)value;
            }
        }

        [NotMapped]
        [Display(Name = "الصف الدراسي")]
        public Year Year { get; set; }

        [NotMapped]
        [Display(Name = "المادة")]
        public Subject Subject { get; set; }
    }

    public enum ExamType
    {
        UnKnown = -1,
        General,
        Lesson,
        Unit,
    }
}