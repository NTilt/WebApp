using System.Data.SqlClient;
using System.Data;
using WebOnkoDis.Entities;
using WebOnkoDis.Helper;
using WebOnkoDis.Repositories.Interfaces;
using Dapper;

namespace WebOnkoDis.Repositories
{
    public class RequestRepository : IRequestRepository
    {
        private DbOptions _dbOptions;

        public RequestRepository(DbOptions dbOptions)
        {
            _dbOptions = dbOptions;
        }

        public void DeleteById(int id)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("id", id);
                var querry = "DELETE FROM Request WHERE Id = @id";
                db.Query(querry, param);
            }
        }

        public List<Request> Get()
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var querry = "SELECT * FROM Request";
                return db.Query<Request>(querry).ToList();
            }
        }

        public Request GetById(int id)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("id", id);
                var querry = "SELECT * FROM Request WHERE Id = @id";
                return db.Query<Request>(querry, param).FirstOrDefault();
            }
        }

        public int Post(Request request)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var querry = "INSERT INTO Request " +
                    "(Name, Phone, Email, Sms) " +
                    "VALUES " +
                    "(@Name, @Phone, @Email, @Sms); " +
                    "SELECT SCOPE_IDENTITY();";
                return db.Query<int>(querry, request).FirstOrDefault();
            }
        }

        public void Put(Request request)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("Id", request.Id);
                param.Add("Name", request.Name);
                param.Add("Phone", request.Phone);
                param.Add("Email", request.Email);
                param.Add("Sms", request.Sms);

                var querry = "UPDATE Request SET " +
                    "Name = @Name, " +
                    "Phone = @Phone, " +
                    "Email = @Email, " +
                    "Sms = @Sms " +
                    "WHERE Id = @Id";

                db.Query<decimal>(querry, param);
            }
        }
    }
}
