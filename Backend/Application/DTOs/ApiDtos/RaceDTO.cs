using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace Backend.Application.DTOs.ApiDtos
{
    public class RaceDTO
    {
        [JsonPropertyName("name")]
        public string Name { get; set; } = null!;
        [JsonPropertyName("slug")]
        public string Slug { get; set; } = null!;

    }
}