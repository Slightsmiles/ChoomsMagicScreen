using Microsoft.AspNetCore.Mvc;
using Backend.Application.Services;

[ApiController]
[Route("races")]
public class RacesController : ControllerBase
{
    private readonly RaceService _raceService;

    public RacesController(RaceService raceService)
    {
        _raceService = raceService;
    }

    [HttpGet]
    public async Task<IActionResult> GetRaces()
    {
        var races = await _raceService.GetAllRaces();
        return Ok(races);
    }


    // For populating Db with all races
    [HttpPost("sync")]
    public async Task<IActionResult> Sync()
    {
        await _raceService.SeedRaces();
        return Ok();
    }
}