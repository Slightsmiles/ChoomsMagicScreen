using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Application.DTOs
{
    // Generic wrapper for getAll on the API (can be used for all types of entities)
    public class ApiListResponse<T>
    {
        public int Count { get; set; }
        public List<T> Results { get; set; } = new();
    }
}