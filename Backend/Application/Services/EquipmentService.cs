using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Backend.Application.DTOs;

namespace Backend.Application.Services
{


    public class EquipmentService
    {
        private readonly HttpClient _http;

        public EquipmentService(IHttpClientFactory f) => _http = f.CreateClient("DndApi");

        public async Task<EquipmentListDTO> getAllEquipment()
        {
            
            var response = await _http.GetAsync("equipment");
            if (!response.IsSuccessStatusCode)
                return StatusCode((int)response.StatusCode);

            var json = await response.Content.ReadAsStringAsync();
            return Content(json, "application/json");
        }
    }
}