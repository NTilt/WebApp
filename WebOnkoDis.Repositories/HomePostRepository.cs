using Dapper;
using System.Data;
using System.Data.SqlClient;
using WebOnkoDis.Entities;
using WebOnkoDis.Helper;
using WebOnkoDis.Repositories.Interfaces;

namespace WebOnkoDis.Repositories
{
    public class HomePostRepository : IHomePostRepository
    {
        private DbOptions _dbOptions;

        public HomePostRepository(DbOptions dbOptions)
        {
            _dbOptions = dbOptions;
        }

        public void DeleteById(int id)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("id", id);
                var querry = "DELETE FROM HomePost WHERE Id = @id";
                db.Query(querry, param);
            }
        }

        public List<HomePost> Get()
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var querry = "SELECT * FROM HomePost";
                return db.Query<HomePost>(querry).ToList();
            }
        }

        public HomePost GetById(int id)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("id", id);
                var querry = "SELECT * FROM HomePost WHERE Id = @id";
                return db.Query<HomePost>(querry, param).FirstOrDefault();
            }
        }

        public int Post(HomePost homePost)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var querry = "INSERT INTO HomePost " +
                    "(Title, Description) " +
                    "VALUES " +
                    "(@Title, @Description); " +
                    "SELECT SCOPE_IDENTITY();";
                return db.Query<int>(querry, homePost).FirstOrDefault();
            }
        }

        public void Put(HomePost homePost)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("Id", homePost.Id);
                param.Add("Title", homePost.Title);
                param.Add("Description", homePost.Description);

                var querry = "UPDATE HomePost SET " +
                    "Title = @Title, " +
                    "Description = @Description " +
                    "WHERE Id = @Id";

                db.Query<decimal>(querry, param);
            }
        }
    }
}
