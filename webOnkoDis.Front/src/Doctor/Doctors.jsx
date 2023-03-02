import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import DoctorPost from "../Api/DoctorPost";

function Doctors() {
  const [doctorPosts, setDoctorPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await DoctorPost.getAll();
    setDoctorPosts(res);
  }

  return (
    <div className="doctors">
      <div className="doctors_items">
        <Swiper
          className="doctors-swiper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={4}
          onSwiper={() => {}}
          onSlideChange={() => {}}
        >
          {console.log(doctorPosts)}
          {doctorPosts.map((doctorPost) => (
            <SwiperSlide style={{ minWidth: 350 }}>
              <div className="doctors_item">
                <div className="pad">
                  <div className="dj">
                    <img
                      src="/images/doctor_ava.png"
                      className="doctor_photo"
                    ></img>
                  </div>
                  <div className="mt-10">
                    <p className="name_style">
                      <b>
                        {doctorPost.surname}&nbsp;
                        {doctorPost.name}&nbsp;
                        {doctorPost.patronymic}
                      </b>
                    </p>
                    <div className="red_line"></div>
                    <p>
                      <b>Стаж {doctorPost.stage} год</b>
                    </p>
                    <p>{doctorPost.role}</p>
                    <p>{doctorPost.academicDegree}</p>
                    <p style={{ color: "#C4413A" }}>{doctorPost.phone}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Doctors;
