using Microsoft.AspNetCore.Mvc;
using WebOnkoDis.Entities;
using WebOnkoDis.Services.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebOnkoDis.Back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly IArticlePostService _articlePostService;

        public ArticleController(IArticlePostService articlePostService)
        {
            _articlePostService = articlePostService;
        }

        // GET: api/<ArticlesController>
        [HttpGet]
        public ActionResult<IEnumerable<ArticlePost>> Get()
        {
            return _articlePostService.Get();
        }

        // GET api/<ArticlesController>/5
        [HttpGet("{id}")]
        public ActionResult<ArticlePost> Get(int id)
        {
            return _articlePostService.GetById(id);
        }

        // POST api/<ArticlesController>
        [HttpPost]
        public ActionResult<int> Post(ArticlePost articlePost)
        {
            if (_articlePostService.Post(articlePost) > 0)
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        // PUT api/<ArticlesController>/5
        [HttpPut]
        public void Put(ArticlePost articlePost)
        {
            _articlePostService.Put(articlePost);
        }

        // DELETE api/<ArticlesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _articlePostService.DeleteById(id);
        }
    }
}
