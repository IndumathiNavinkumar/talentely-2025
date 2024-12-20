import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import EventData from "../../data/events.json";
import TeamData from "../../data/elements/team.json";

const EventCarouse = () => {
  return (
    <>
      <Swiper
        className="swiper event-activation-1 rbt-arrow-between rbt-dot-bottom-center pb--60 icon-bg-primary"
        slidesPerView={1}
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        pagination={{
          el: ".rbt-swiper-pagination",
          clickable: true,
        }}
        navigation={{
          prevEl: ".rbt-arrow-right",
          nextEl: ".rbt-arrow-left",
        }}
        breakpoints={{
          481: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {TeamData.whyTalentely.map((data, index) => (
          <SwiperSlide className="swiper-wrapper" key={index}>
            {data.details.map((item, innerIndex) => (
              <div className="swiper-slide" key={innerIndex}>
                <div className="single-slide">
                  <div className="rbt-card event-grid-card variation-01 rbt-hover">
                    <div className="rbt-card-img">
                      <Link href={`/event-details/${item.id}`}>
                        <Image
                          src={item.img}
                          width={710}
                          height={480}
                          alt="Card image"
                        />
                      </Link>
                    </div>
                    <div className="content mt--20 text-center">
                      <h3
                        className="title"
                        style={{
                          fontSize: "24px",
                          fontWeight: "normal",
                          marginBottom: "10px",
                        }}
                      >
                        {item.title}
                      </h3>
                      <h6
                        className="subtitle theme-gradient"
                        style={{ marginBottom: "7px " }}
                      >
                        {item.subtitle}
                      </h6>
                      <span className="team-form" style={{ fontSize: "14px" }}>
                        <span className="location">{item.des}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </SwiperSlide>
        ))}

        <div className="rbt-swiper-arrow rbt-arrow-left">
          <div className="custom-overfolow">
            <i className="rbt-icon feather-arrow-left"></i>
            <i className="rbt-icon-top feather-arrow-left"></i>
          </div>
        </div>

        <div className="rbt-swiper-arrow rbt-arrow-right">
          <div className="custom-overfolow">
            <i className="rbt-icon feather-arrow-right"></i>
            <i className="rbt-icon-top feather-arrow-right"></i>
          </div>
        </div>

        <div className="rbt-swiper-pagination" style={{ bottom: "0" }}></div>
      </Swiper>
    </>
  );
};

export default EventCarouse;
