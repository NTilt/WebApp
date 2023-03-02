using WebOnkoDis.Entities;
using WebOnkoDis.Repositories.Interfaces;
using WebOnkoDis.Services.Interfaces;

namespace WebOnkoDis.Services
{
    public class DoctorService : IDoctorService
    {
        public readonly IDoctorRepository _doctorRepository;

        public DoctorService(IDoctorRepository doctorRepository)
        {
            _doctorRepository = doctorRepository;
        }

        public void DeleteById(int id)
        {
            _doctorRepository.DeleteById(id);
        }

        public List<Doctor> Get()
        {
            return _doctorRepository.Get();
        }

        public Doctor GetById(int id)
        {
            return _doctorRepository.GetById(id);
        }

        public int Post(Doctor doctor)
        {
            return _doctorRepository.Post(doctor);
        }

        public void Put(Doctor doctor)
        {
            _doctorRepository.Put(doctor);
        }
    }
}
