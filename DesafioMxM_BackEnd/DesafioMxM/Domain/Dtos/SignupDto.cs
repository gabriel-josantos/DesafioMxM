using System.ComponentModel.DataAnnotations;

namespace DesafioMxM.Domain.Dtos;

    public class SignupDto
    {

 
    public long Cpf { get; set; }

    public string Name { get; set; }
   
    public string Email { get; set; }
   
    public string PhoneNumber { get; set; }

    public string PostalCode { get; set; }
    public string BaseAddress { get; set; }
    public string AddressNumber { get; set; } = "S/N";
    public string Neighborhood { get; set; }
    public string CityName { get; set; }
    public string StateName { get; set; }



}
