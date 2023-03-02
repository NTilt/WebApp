using WebOnkoDis.Entities;
using WebOnkoDis.Repositories.Interfaces;
using WebOnkoDis.Services.Interfaces;

namespace WebOnkoDis.Services
{
    public class ArticlePostService : IArticlePostService
    {
        public readonly IArticlePostRepository _articlePostRepository;

        public ArticlePostService(IArticlePostRepository articlePostRepository)
        {
            _articlePostRepository = articlePostRepository;
        }

        public void DeleteById(int id)
        {
            _articlePostRepository.DeleteById(id);
        }

        public List<ArticlePost> Get()
        {
            return _articlePostRepository.Get();
        }

        public ArticlePost GetById(int id)
        {
            return _articlePostRepository.GetById(id);
        }

        public int Post(ArticlePost articlePost)
        {
            return _articlePostRepository.Post(articlePost);
        }

        public void Put(ArticlePost articlePost)
        {
            _articlePostRepository.Put(articlePost);
        }
    }
}
