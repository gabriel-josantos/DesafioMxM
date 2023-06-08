using DesafioMxM.Domain;
using DesafioMxM.Domain.Models;

namespace DesafioMxM.Repositories;

    public class UserRepository:BaseRepository<User>,IUserRepository
    {
    public UserRepository(BankContext context) : base(context)
    {

    }

}

