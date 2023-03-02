using WebOnkoDis.Entities;

namespace WebOnkoDis.Services.Interfaces
{
    public interface IDoctorService
    {
        public int Post(Doctor doctor);
        public List<Doctor> Get();
        public Doctor GetById(int id);
        public void DeleteById(int id);
        public void Put(Doctor doctor);
    }
}
