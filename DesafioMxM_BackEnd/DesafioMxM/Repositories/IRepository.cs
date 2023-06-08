using DesafioMxM.Domain.Models;

namespace DesafioMxM.Repositories;

    public interface IRepository<T> where T:Entity
    {
    Task<IEnumerable<T>> GetAll();
    Task Create(T entity);

    Task Update(T entity);

    Task Delete(T entity);

    }
