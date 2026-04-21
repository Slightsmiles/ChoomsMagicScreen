using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Application.DTOs;
using Backend.Application.DTOs.ApiDtos;

namespace Backend.Application.Services
{
    public class RaceService
    {
        private readonly HttpClient _http;

        public async Task SeedRaces()
        {
            var response = _http.GetFromJsonAsync<ApiListResponse<RaceDTO>>("species/");
        }
    }
}