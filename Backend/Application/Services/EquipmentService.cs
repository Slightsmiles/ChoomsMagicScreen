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

        public async Task<List<EquipmentListDTO>> GetAllEquipmentAsync()
        {
            // Deserializes directly into my DTO
            var apiResponse = await _http.GetFromJsonAsync<ApiListResponse<EquipmentListDTO>>("equipment");


            return apiResponse?.Results ?? new List<EquipmentListDTO>();
        }

        public async Task<EquipmentDTO?> GetOneEquipmentAsync(string index)
        {
            try
            {
                var item = await _http.GetFromJsonAsync<EquipmentDTO>($"equipment/{index}");
                Console.WriteLine(item);
                return item;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching {index}: {ex.Message}");
                return null;
            }
        }
    }
}