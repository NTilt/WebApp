using Dapper;
using System.Data;
using System.Data.SqlClient;
using WebOnkoDis.Entities;
using WebOnkoDis.Helper;
using WebOnkoDis.Repositories.Interfaces;

namespace WebOnkoDis.Repositories
{
    public class ArticlePostRepository : IArticlePostRepository
    {
        private DbOptions _dbOptions;

        public ArticlePostRepository(DbOptions dbOptions)
        {
            _dbOptions = dbOptions;
        }

        public void DeleteById(int id)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("id", id);
                var querry = "DELETE FROM ArticlePost WHERE Id = @id";
                db.Query(querry, param);
            }
        }

        public List<ArticlePost> Get()
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var querry = "SELECT * FROM ArticlePost";
                return db.Query<ArticlePost>(querry).ToList();
            }
        }

        public ArticlePost GetById(int id)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("id", id);
                var querry = "SELECT * FROM ArticlePost WHERE Id = @id";
                return db.Query<ArticlePost>(querry, param).FirstOrDefault();
            }
        }

        public int Post(ArticlePost articlePost)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var querry = "INSERT INTO ArticlePost (Title, Description) " +
                    "VALUES (@Title, @Description); SELECT SCOPE_IDENTITY();";
                return (int)(db.Query<decimal>(querry, articlePost).FirstOrDefault());
            }
        }

        public void Put(ArticlePost articlePost)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("Id", articlePost.Id);
                param.Add("Title", articlePost.Title);
                param.Add("Description", articlePost.Description);

                var querry = "UPDATE ArticlePost SET " +
                    "Description = @Description, " +
                    "Title = @Title " +
                    "WHERE Id = @Id";

                db.Query<decimal>(querry, param);
            }
        }
    }
}
