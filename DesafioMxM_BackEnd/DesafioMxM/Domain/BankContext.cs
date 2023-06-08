namespace DesafioMxM.Domain;

using DesafioMxM.Domain.Models;
using Microsoft.EntityFrameworkCore;

public class BankContext : DbContext
{

    public DbSet<User> Users { get; set; }

    public DbSet<Address> Addresses { get; set; }

    public BankContext(DbContextOptions options) : base(options)
    {

    }
}

