using System.Data.SqlClient;
using System.Data;
using WebOnkoDis.Entities;
using WebOnkoDis.Helper;
using WebOnkoDis.Repositories.Interfaces;
using Dapper;

namespace WebOnkoDis.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private DbOptions _dbOptions;

        public ReviewRepository(DbOptions dbOptions)
        {
            _dbOptions = dbOptions;
        }

        public void DeleteById(int id)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("id", id);
                var querry = "DELETE FROM Review WHERE Id = @id";
                db.Query(querry, param);
            }
        }

        public List<Review> Get()
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var querry = "SELECT * FROM Review";
                return db.Query<Review>(querry).ToList();
            }
        }

        public Review GetById(int id)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("id", id);
                var querry = "SELECT * FROM Review WHERE Id = @id";
                return db.Query<Review>(querry, param).FirstOrDefault();
            }
        }

        public int Post(Review review)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var querry = "INSERT INTO Review " +
                    "(Name, DateOnly, Description) " +
                    "VALUES " +
                    "(@Name, @DateOnly, @Description); " +
                    "SELECT SCOPE_IDENTITY();";
                return db.Query<int>(querry, review).FirstOrDefault();
            }
        }

        public void Put(Review review)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("Id", review.Id);
                param.Add("Name", review.Name);
                param.Add("DateOnly", review.DateOnly);
                param.Add("Description", review.Description);

                var querry = "UPDATE Review SET " +
                    "Name = @Name, " +
                    "DateOnly = @DateOnly, " +
                    "Description = @Description " +
                    "WHERE Id = @Id";

                db.Query<decimal>(querry, param);
            }
        }
    }
}
