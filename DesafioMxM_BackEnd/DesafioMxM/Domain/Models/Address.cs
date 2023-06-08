using System.ComponentModel.DataAnnotations.Schema;

namespace DesafioMxM.Domain.Models;

public class Address:Entity
{
    public string PostalCode { get; set; }
    public string BaseAddress { get; set; }
    public string BaseAddressNumber { get; set; } = "S/N";
    public string Neighborhood { get; set; }
    public string CityName { get; set; }
    public string StateName { get; set; }

    [ForeignKey("User")]
    public long UserId { get; set; }
    public virtual User User { get; set; }
}

