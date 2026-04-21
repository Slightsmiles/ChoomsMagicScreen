using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using Backend.Entities;
using Backend.Application.Services;
using Backend.Application.DTOs;

[ApiController]
[Route("characters")]
public class CharactersController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly RaceService _raceService;
    private readonly ClassService _classService;

    public CharactersController(
        AppDbContext context,
        RaceService raceService,
        ClassService classService)
    {
        _context = context;
        _raceService = raceService;
        _classService = classService;
    }

    [HttpPost]
    public async Task<IActionResult> CreateCharacter(CreateCharacterDto dto)
    {
        var race = await _raceService.GetOrCreateRace(dto.RaceApiIndex);
        var cls = await _classService.GetOrCreateClass(dto.ClassApiIndex);

        var character = new Character
        {
            Name = dto.Name,
            RaceId = race.Id,
            Level = 1
        };

        _context.Characters.Add(character);
        await _context.SaveChangesAsync();

        var characterClass = new CharacterClass
        {
            CharacterId = character.Id,
            ClassId = cls.Id,
            Level = 1
        };

        _context.CharacterClasses.Add(characterClass);
        await _context.SaveChangesAsync();

        return Ok(character);
    }
}