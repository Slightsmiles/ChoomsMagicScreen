using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("classes")]
public class ClassesController : ControllerBase
{
    private readonly ClassService _classService;

    public ClassesController(ClassService classService)
    {
        _classService = classService;
    }

    [HttpGet]
    public async Task<IActionResult> GetClasses()
    {
        var classes = await _classService.GetAllClasses();
        return Ok(classes);
    }
}