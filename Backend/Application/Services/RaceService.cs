using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Application.DTOs;
using Backend.Application.DTOs.ApiDtos;
using Backend.Application.Interfaces;

namespace Backend.Application.Services
{
    public class RaceService : IRaceService
    {
        private readonly HttpClient _http;


        public RaceService(IHttpClientFactory f) => _http = f.CreateClient("Open5EApi");
        public async Task SeedRaces()
        {
            var response = _http.GetFromJsonAsync<ApiListResponse<RaceDTO>>("species/");
        }

        
        public async Task<List<RaceDTO>> GetAllRaces()
        {
           try            
            
        }
    }
}