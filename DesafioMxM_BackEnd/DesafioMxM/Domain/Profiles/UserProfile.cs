using AutoMapper;
using DesafioMxM.Domain.Dtos;
using DesafioMxM.Domain.Models;

namespace DesafioMxM.Domain.Profiles;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<SignupDto, User>();
        CreateMap<SignupDto, Address>();
    }

}

