using DesafioMxM.Domain;
using DesafioMxM.Domain.Models;
using DesafioMxM.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DesafioMxM.Repositories;

public abstract class BaseRepository<T> : IRepository<T> where T : Entity
{

    protected readonly ApplicationContext _bankContext;

    public BaseRepository(ApplicationContext bankContext)
    {
        _bankContext = bankContext;
    }
    public async Task Create(T entity)
    {
        await _bankContext.Set<T>().AddAsync(entity);
        await _bankContext.SaveChangesAsync();
    }


    public async Task<IEnumerable<T>> GetAll()
    {
        return await _bankContext.Set<T>().ToListAsync();
    }

    public Task Update(T entity)
    {
        throw new NotImplementedException();
    }
    public Task Delete(T entity)
    {
        throw new NotImplementedException();
    }

}
