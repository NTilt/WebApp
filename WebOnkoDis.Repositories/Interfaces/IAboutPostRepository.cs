using WebOnkoDis.Entities;

namespace WebOnkoDis.Repositories.Interfaces
{
    public interface IAboutPostRepository
    {
        public int Post(AboutPost aboutPost);
        public List<AboutPost> Get();
        public AboutPost GetById(int id);
        public void DeleteById(int id);
        public void Put(AboutPost aboutPost);
    }
}
