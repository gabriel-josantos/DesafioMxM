using Microsoft.AspNetCore.Mvc;

namespace DesafioMxM.Controllers;

[ApiController]
[Route("/users")]

public class UserController : ControllerContext
{
    [HttpGet]

    public async Task<IActionResult> GetAllUsers()
    {
        return Ok("Success");
    }

}
