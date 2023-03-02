using WebOnkoDis.Entities;
using WebOnkoDis.Repositories.Interfaces;
using WebOnkoDis.Services.Interfaces;

namespace WebOnkoDis.Services
{
    public class AboutPostService : IAboutPostService
    {
        public readonly IAboutPostRepository _aboutPostRepository;

        public AboutPostService(IAboutPostRepository aboutPostRepository)
        {
            _aboutPostRepository = aboutPostRepository;
        }

        public void DeleteById(int id)
        {
            _aboutPostRepository.DeleteById(id);
        }

        public List<AboutPost> Get()
        {
            return _aboutPostRepository.Get();
        }

        public AboutPost GetById(int id)
        {
            return _aboutPostRepository.GetById(id);
        }

        public int Post(AboutPost aboutPost)
        {
            return _aboutPostRepository.Post(aboutPost);
        }

        public void Put(AboutPost aboutPost)
        {
            _aboutPostRepository.Put(aboutPost);
        }
    }
}
