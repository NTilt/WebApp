using WebOnkoDis.Entities;

namespace WebOnkoDis.Repositories.Interfaces
{
    public interface IArticlePostRepository
    {
        public int Post(ArticlePost articlePost);
        public List<ArticlePost> Get();
        public ArticlePost GetById(int id);
        public void DeleteById(int id);
        public void Put(ArticlePost articlePost);
    }
}
