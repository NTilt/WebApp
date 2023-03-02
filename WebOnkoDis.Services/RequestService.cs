using WebOnkoDis.Entities;
using WebOnkoDis.Repositories.Interfaces;
using WebOnkoDis.Services.Interfaces;

namespace WebOnkoDis.Services
{
    public class RequestService : IRequestService
    {
        public readonly IRequestRepository _requestRepository;

        public RequestService(IRequestRepository requestRepository)
        {
            _requestRepository = requestRepository;
        }

        public void DeleteById(int id)
        {
            _requestRepository.DeleteById(id);
        }

        public List<Request> Get()
        {
            return _requestRepository.Get();
        }

        public Request GetById(int id)
        {
            return _requestRepository.GetById(id);
        }

        public int Post(Request request)
        {
            return _requestRepository.Post(request);
        }

        public void Put(Request request)
        {
            _requestRepository.Put(request);
        }
    }
}
