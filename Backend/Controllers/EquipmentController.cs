using System.Threading.Tasks;
using Backend.Application.Services;
using Backend.Application.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EquipmentController : ControllerBase
    {
        private readonly EquipmentService _service;

        public EquipmentController(EquipmentService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEquipment()
        {
            List<EquipmentListDTO> items;
            try
            {
                items = await _service.GetAllEquipmentAsync();
            }
            catch
            {
                return StatusCode(500, "Error fetching equipment from API");
            }

            return Ok(items);
        }

        [HttpGet("{index}")]
        public async Task<IActionResult> GetOne(string index)
        {
            EquipmentDTO? item;
            try
            {
                item = await _service.GetOneEquipmentAsync(index);
                if (item == null)
                    return NotFound();
            }
            catch
            {
                return StatusCode(500, "Error fetching equipment from API");
            }

            return Ok(item);
        }
    }
}
