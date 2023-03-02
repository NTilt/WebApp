using WebOnkoDis.Entities;

namespace WebOnkoDis.Services.Interfaces
{
    public interface IAboutPostService
    {
        public int Post(AboutPost aboutPost);
        public List<AboutPost> Get();
        public AboutPost GetById(int id);
        public void DeleteById(int id);
        public void Put(AboutPost aboutPost);
    }
}
