using WebOnkoDis.Entities;

namespace WebOnkoDis.Repositories.Interfaces
{
    public interface IDoctorRepository
    {
        public int Post(Doctor doctor);
        public List<Doctor> Get();
        public Doctor GetById(int id);
        public void DeleteById(int id);
        public void Put(Doctor doctor);
    }
}
