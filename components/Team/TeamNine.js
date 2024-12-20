import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TeamData from "../../data/elements/team.json";

const TeamNine = () => {
  return (
    <>
      <div className="container">
        <h2 className="title text-center mb--10 sectionHeading">Benefits</h2>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              className="swiper team-slide-activation-2 rbt-dot-bottom-center ptb--50"
              modules={[Pagination]}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                el: ".rbt-swiper-pagination",
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            >
              {TeamData &&
                TeamData.whyTalentely.map((data, index) => (
                  <SwiperSlide className="swiper-wrapper mb-0" key={index}>
                    {data.details.map((item, innerIndex) => (
                      <div className="swiper-slide" key={innerIndex}>
                        <div className="rbt-team team-style-default style-three rbt-hover">
                          <div className="inner">
                            <div className="thumbnail">
                              <Image
                                src={item.img}
                                width={415}
                                height={555}
                                priority
                                alt="Corporate Template"
                              />
                            </div>
                            <div className="content">
                              <h3
                                className="title"
                                style={{ fontSize: "24px",fontWeight:"normal" }}
                              >
                                {item.title}
                              </h3>
                              <h6 className="subtitle theme-gradient">
                                {item.subtitle}
                              </h6>
                              <span className="team-form">
                                <span className="location">{item.des}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </SwiperSlide>
                ))}
              <div
                className="rbt-swiper-pagination"
                style={{ bottom: "0" }}
              ></div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamNine;
