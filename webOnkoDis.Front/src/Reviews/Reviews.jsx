import styles from "./Reviews.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import ReviewPost from "../Api/ReviewPost";
import moment from "moment";

function Reviews() {
  const [reviewPosts, setReviewPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setReviewPosts(await ReviewPost.getByTwo());
  }

  return (
    <div className={styles.reviews}>
      <Swiper
        className="doctors-swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={2}
        onSwiper={() => {}}
        onSlideChange={() => {}}
      >
        {reviewPosts.map((reviewPost) => (
          <SwiperSlide>
            {console.log(reviewPost)}
            <div className="rev_item">
              <div className={styles.reviews_container}>
                <div className={styles.reviews_container_text}>
                  {reviewPost[0].description}
                </div>
                <div className={styles.rev_con_bot}>
                  <div>
                    <img
                      src="/images/redline.png"
                      className={styles.red_line}
                    ></img>
                  </div>
                  <div className={styles.rcb_info}>
                    <div>
                      <p>{reviewPost[0].name}</p>
                    </div>
                    <div>
                      <p>
                        {moment(reviewPost[0].dateonly)
                          .utc()
                          .format("YYYY.MM.DD")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {reviewPost[1] ? (
              <div className="rev_item">
                <div className={styles.reviews_container}>
                  <div className={styles.reviews_container_text}>
                    {reviewPost[1].description}
                  </div>
                  <div className={styles.rev_con_bot}>
                    <div>
                      <img
                        src="/images/redline.png"
                        className={styles.red_line}
                      ></img>
                    </div>
                    <div className={styles.rcb_info}>
                      <div>
                        <p>{reviewPost[1].name}</p>
                      </div>
                      <div>
                        <p>
                          {moment(reviewPost[1].dateonly)
                            .utc()
                            .format("YYYY-MM-DD")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Reviews;
