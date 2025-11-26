using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
namespace Backend.Application.DTOs
{
    public class EquipmentDTO
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string? Index { get; set; }

        public string? Name { get; set; }
        
        [JsonPropertyName("equipment_category")]
        public EquipmentCategoryDTO? EquipmentCategory { get; set; }



    }
}