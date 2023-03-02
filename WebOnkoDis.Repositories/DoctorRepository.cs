using Dapper;
using System.Data;
using System.Data.SqlClient;
using WebOnkoDis.Entities;
using WebOnkoDis.Helper;
using WebOnkoDis.Repositories.Interfaces;

namespace WebOnkoDis.Repositories
{
    public class DoctorRepository : IDoctorRepository
    {
        private DbOptions _dbOptions;

        public DoctorRepository(DbOptions dbOptions)
        {
            _dbOptions = dbOptions;
        }

        public void DeleteById(int id)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("id", id);
                var querry = "DELETE FROM Doctor WHERE Id = @id";
                db.Query(querry, param);
            }
        }

        public List<Doctor> Get()
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var querry = "SELECT * FROM Doctor";
                return db.Query<Doctor>(querry).ToList();
            }
        }

        public Doctor GetById(int id)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("id", id);
                var querry = "SELECT * FROM Doctor WHERE Id = @id";
                return db.Query<Doctor>(querry, param).FirstOrDefault();
            }
        }

        public int Post(Doctor doctor)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var querry = "INSERT INTO Doctor " +
                    "(Name, Surname, Patronymic, Stage, Role, AcademicDegree, Phone) " +
                    "VALUES " +
                    "(@Name, @Surname, @Patronymic, @Stage, @Role, @AcademicDegree, @Phone); " +
                    "SELECT SCOPE_IDENTITY();";
                return (int)(db.Query<decimal>(querry, doctor).FirstOrDefault());
            }
        }

        public void Put(Doctor doctor)
        {
            using (IDbConnection db = new SqlConnection(_dbOptions.ConnectionString))
            {
                var param = new DynamicParameters();
                param.Add("Id", doctor.Id);
                param.Add("Name", doctor.Name);
                param.Add("Surname", doctor.Surname);
                param.Add("Patronymic", doctor.Patronymic);
                param.Add("Stage", doctor.Stage);
                param.Add("Role", doctor.Role);
                param.Add("AcademicDegree", doctor.AcademicDegree);
                param.Add("Phone", doctor.Phone);

                var querry = "UPDATE Doctor SET " +
                    "Name = @Name, " +
                    "Surname = @Surname, " +
                    "Patronymic = @Patronymic, " +
                    "Stage = @Stage, " +
                    "Role = @Role, " +
                    "AcademicDegree = @AcademicDegree, " +
                    "Phone = @Phone " +
                    "WHERE Id = @Id";

                db.Query<decimal>(querry, param);
            }
        }
    }
}
