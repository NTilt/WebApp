using WebOnkoDis.Entities;

namespace WebOnkoDis.Repositories.Interfaces
{
    public interface IRequestRepository
    {
        public int Post(Request request);
        public List<Request> Get();
        public Request GetById(int id);
        public void DeleteById(int id);
        public void Put(Request request);
    }
}
