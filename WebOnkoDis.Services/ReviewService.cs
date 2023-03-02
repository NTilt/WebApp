using WebOnkoDis.Entities;
using WebOnkoDis.Repositories.Interfaces;
using WebOnkoDis.Services.Interfaces;

namespace WebOnkoDis.Services
{
    public class ReviewService : IReviewService
    {
        public readonly IReviewRepository _reviewRepository;

        public ReviewService(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        public void DeleteById(int id)
        {
            _reviewRepository.DeleteById(id);
        }

        public List<List<Review>> GetByTwo()
        {
            List<Review> tmpArr = _reviewRepository.Get();
            List<List<Review>> res = new();
            int size = 0;
            if((tmpArr.Count % 2) == 0)
            {
                size = tmpArr.Count / 2;
            }
            else
            {
                size = (tmpArr.Count / 2) + 1;

            }
            for (int i = 0; i < size; i++)
            {
                res.Add(new List<Review>());
            }

            int index = 0;
            for (int i = 0; i < tmpArr.Count; i++)
            {
                res[index].Add(tmpArr[i]);
                i++;
                if (i < tmpArr.Count)
                {
                    res[index].Add(tmpArr[i]);
                }
                index++;
            }
            return res;
        }

        public List<Review> Get()
        {
            return _reviewRepository.Get();
        }

        public Review GetById(int id)
        {
            return _reviewRepository.GetById(id);
        }

        public int Post(Review review)
        {
            return _reviewRepository.Post(review);
        }

        public void Put(Review review)
        {
            _reviewRepository.Put(review);
        }
    }
}
