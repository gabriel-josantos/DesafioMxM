using AutoMapper;
using DesafioMxM.Domain.Dtos;
using DesafioMxM.Domain.Models;
using DesafioMxM.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DesafioMxM.Controllers;

[ApiController]
[Route("/users")]

public class UserController : ControllerBase
{
    private readonly IUserRepository _userRepository;
    private readonly IAddressRepository _addressRepository;
    private readonly IMapper _mapper;

    public UserController(IUserRepository userRepository, IAddressRepository addressRepository, IMapper mapper)
    {
        _userRepository = userRepository;
        _addressRepository = addressRepository;
        _mapper = mapper;
    }

    [HttpPost]

    public async Task CreateUser([FromBody] SignupDto signupDto)
    {

        User newUser = _mapper.Map<User>(signupDto);

        await _userRepository.Create(newUser);

        Address newAddress = _mapper.Map<Address>(signupDto, options =>
        {
            options.AfterMap((src, dest) => dest.UserId = newUser.Id);
        });
 
        await _addressRepository.Create(newAddress);
    }

    [HttpGet]

    public async Task<IActionResult> GetAllUsers()
    {
        var users = await _userRepository.GetAll();
        return Ok(users);
    }

}
