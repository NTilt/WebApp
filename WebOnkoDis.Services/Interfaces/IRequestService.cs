using WebOnkoDis.Entities;

namespace WebOnkoDis.Services.Interfaces
{
    public interface IRequestService
    {
        public int Post(Request request);
        public List<Request> Get();
        public Request GetById(int id);
        public void DeleteById(int id);
        public void Put(Request request);
    }
}
