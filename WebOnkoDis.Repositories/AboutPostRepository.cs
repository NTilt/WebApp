using Dapper;
using System.Data;
using System.Data.SqlClient;
using WebOnkoDis.Entities;
using WebOnkoDis.Helper;
using WebOnkoDis.Repositories.Interfaces;

namespace WebOnkoDis.Repositories
{
    public class AboutPostRepository : IAboutPostRepository
    {
        private DbOptions _dbOptions;

        public AboutPostRepository(DbOptions dbOptions)
        {
            _dbOptions = dbOptions;
        }

        public void DeleteById(int id)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("id", id);
                var querry = "DELETE FROM AboutPost WHERE Id = @id";
                db.Query(querry, param);
            }
        }

        public List<AboutPost> Get()
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var querry = "SELECT * FROM AboutPost";
                return db.Query<AboutPost>(querry).ToList();
            }
        }

        public AboutPost GetById(int id)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("id", id);
                var querry = "SELECT * FROM AboutPost WHERE Id = @id";
                return db.Query<AboutPost>(querry, param).FirstOrDefault();
            }
        }

        public int Post(AboutPost aboutPost)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var querry = "INSERT INTO AboutPost (Title, Description) " +
                    "VALUES (@Title, @Description); SELECT SCOPE_IDENTITY();";
                return (int)(db.Query<decimal>(querry, aboutPost).FirstOrDefault());
            }
        }

        public void Put(AboutPost aboutPost)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("Id", aboutPost.Id);
                param.Add("Title", aboutPost.Title);
                param.Add("Description", aboutPost.Description);

                var querry = "UPDATE AboutPost SET " +
                    "Description = @Description, " +
                    "Title = @Title " +
                    "WHERE Id = @Id";

                db.Query<decimal>(querry, param);
            }
        }
    }
}
