using WebOnkoDis.Entities;
using WebOnkoDis.Repositories.Interfaces;
using WebOnkoDis.Services.Interfaces;

namespace WebOnkoDis.Services
{
    public class HomePostService : IHomePostService
    {
        public readonly IHomePostRepository _homePostRepository;

        public HomePostService(IHomePostRepository homePostRepository)
        {
            _homePostRepository = homePostRepository;
        }

        public void DeleteById(int id)
        {
            _homePostRepository.DeleteById(id);
        }

        public List<HomePost> Get()
        {
            return _homePostRepository.Get();
        }

        public HomePost GetById(int id)
        {
            return _homePostRepository.GetById(id);
        }

        public int Post(HomePost homePost)
        {
            return _homePostRepository.Post(homePost);
        }

        public void Put(HomePost homePost)
        {
            _homePostRepository.Put(homePost);
        }
    }
}
