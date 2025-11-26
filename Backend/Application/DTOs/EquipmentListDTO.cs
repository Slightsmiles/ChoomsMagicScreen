using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Backend.Application.DTOs
{
    public class EquipmentListDTO
    {
        [Required]
        public string? Index {get; set;}

        public string? Name {get; set;}
        
    }
}