using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;


namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EquipmentController : ControllerBase
    {
        private readonly HttpClient _client;

        public EquipmentController(IHttpClientFactory factory)
        {
            _client = factory.CreateClient("DndApi");
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEquipment()
        {
            var response = await _client.GetAsync("equipment");
            if (!response.IsSuccessStatusCode)
                return StatusCode((int)response.StatusCode);

            var json = await response.Content.ReadAsStringAsync();
            return Content(json, "application/json");
        }

        [HttpGet("{index}")]
        public async Task<IActionResult> GetOne(string index)
        {
            var response = await _client.GetAsync($"equipment/{index}");
            if (!response.IsSuccessStatusCode)
                return StatusCode((int)response.StatusCode);

            var json = await response.Content.ReadAsStringAsync();
            return Content(json, "application/json");
        }
    }
}