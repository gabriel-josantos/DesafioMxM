using System.ComponentModel.DataAnnotations.Schema;

namespace DesafioMxM.Domain.Models;

    public class User:Entity
    {
    public long Cpf { get; set; }
    public string Name { get; set; }

    public string Email { get; set; }

    public string Cellphone { get; set; }

    public Address Address { get; set; }

    }

