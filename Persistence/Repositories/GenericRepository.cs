using HMS.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace HMS.Persistence.Repositories;

public class GenericRepository<T> where T : class
{
    protected AppDbContext _context;
    protected DbSet<T> dbSet;
    public GenericRepository(AppDbContext context)
    {
        _context = context;
        this.dbSet = context.Set<T>();
    }
    public virtual async Task<IEnumerable<T>> All()
    {
        return await dbSet.ToListAsync();
    }
    public async Task<int> Count(Expression<Func<T, bool>> predicate)
    {
        return await dbSet.CountAsync(predicate);
    }
    public async Task<T?> Find(int id)
    {
        return await dbSet.FindAsync(id);
    }
    public Task<T?> FindOne(Expression<Func<T, bool>> predicate)
    {
        return dbSet.FirstOrDefaultAsync(predicate);
    }
    public async Task<IEnumerable<T>> Find(Expression<Func<T, bool>> predicate)
    {
        return await dbSet.Where(predicate).ToListAsync();
    }
    public async Task<IEnumerable<T>> FindPaged(Expression<Func<T, bool>> predicate, int page, int size = 100, bool tracked = false)
    {
        return await (tracked ? dbSet : dbSet.AsNoTracking())
            .Where(predicate)
            .Skip(page * size)
            .Take(size)
            .ToListAsync();
    }
    public virtual async Task<T> Add(T entity)
    {
        var rslt = await dbSet.AddAsync(entity);
        return rslt.Entity;
    }

    public virtual Task<int> Delete(Expression<Func<T, bool>> predicate)
    {
        return dbSet.Where(predicate).ExecuteDeleteAsync();
    }

    public async Task AddRange(IEnumerable<T> entities)
    {
        await dbSet.AddRangeAsync(entities);
    }
    public bool Exists(T entity)
    {
        if (dbSet.Equals(entity))
        {
            return true;
        }
        else return false;
    }
    public void Update(T entity)
    {
        dbSet.Update(entity);
    }
    public void Delete(T entity)
    {
        dbSet.Remove(entity);
    }
    public List<T> GetList()
    {
        return dbSet.ToList();
    }
}
