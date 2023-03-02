using WebOnkoDis.Entities;

namespace WebOnkoDis.Repositories.Interfaces
{
    public interface IReviewRepository
    {
        public int Post(Review review);
        public List<Review> Get();
        public Review GetById(int id);
        public void DeleteById(int id);
        public void Put(Review review);
    }
}
