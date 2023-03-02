using WebOnkoDis.Entities;

namespace WebOnkoDis.Services.Interfaces
{
    public interface IHomePostService
    {
        public int Post(HomePost homePost);
        public List<HomePost> Get();
        public HomePost GetById(int id);
        public void DeleteById(int id);
        public void Put(HomePost homePost);
    }
}
