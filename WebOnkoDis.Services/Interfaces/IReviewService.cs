using WebOnkoDis.Entities;

namespace WebOnkoDis.Services.Interfaces
{
    public interface IReviewService
    {
        public int Post(Review review);
        public List<List<Review>> GetByTwo();
        public List<Review> Get();
        public Review GetById(int id);
        public void DeleteById(int id);
        public void Put(Review review);
    }
}
