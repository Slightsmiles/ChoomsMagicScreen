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
            try
            {
                var apiResponse = await _http.GetFromJsonAsync<ApiListResponse<EquipmentListDTO>>("equipment");


                return apiResponse?.Results ?? new List<EquipmentListDTO>();

            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching All Equipment: {ex.Message}");
                return new List<EquipmentListDTO>(); // Returns empty list
            }

        }

        public async Task<EquipmentDTO?> GetOneEquipmentAsync(string index)
        {
            try
            {
                var item = await _http.GetFromJsonAsync<EquipmentDTO>($"equipment/{index}");
                return item;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching {index}: {ex.Message}");
                return DummyEquipment(); //Returns null object
            }
        }


        private EquipmentDTO DummyEquipment()
        {
            return new EquipmentDTO
            {
                Name = "Error",
                Index = "Error",
                EquipmentCategory = new EquipmentCategoryDTO()
                {
                    Index = "Error",
                    Name = "Error",
                    Url = "Error"
                }
            };
        }
    }



}

