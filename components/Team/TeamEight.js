import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import TeamData from "../../data/elements/team.json";

const TeamEight = ({ head ,data}) => {
  console.log("data: ", data);
  return (
    <>
      <div className="container">
        <div className="row row--15">
          <div className="col-lg-12 pr--60 pl--60">
            <div style={{ position: "relative" }}>
              <Swiper
                className="swiper team-slide-activation pl--50 pr--50"
                modules={[Navigation]}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                  el: ".rbt-swiper-pagination",
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".rbt-arrow-right",
                  prevEl: ".rbt-arrow-left",
                }}
                breakpoints={{
                  575: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                }}
              >
                {data &&
                  data.map((data, index) => (
                    <SwiperSlide key={index}>
                      {/* {data.map((item, innerIndex) => ( */}
                        <div
                          className="swiper-slide"
                          key={index}
                          style={{
                            border: "1px solid #b4b7bc",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "10px",
                            boxSizing: "border-box",
                            height:150,
                            justifyContent:"center"
                          }}
                        >
                          <div className="">
                            <div className="thumbnail">
                              <Link href="#">
                                <Image
                                  src={data}
                                  width={"100%"}
                                  height={"100%"}
                                  priority
                                  alt="Team Image"
                                  style={{
                                   /* width: "100px", */// Smaller size for the image
                                    height: "auto",
                                  }}
                                />
                              </Link>
                            </div>
                            {/* <div className="content">
                              <div className="inner">
                                <h4 className="title">
                                  <Link href="#">{item.name}</Link>
                                </h4>
                                <p className="designation">{item.type}</p>
                              </div>
                              <div className="icon-right">
                                <Link href="#">
                                  <i className="feather-arrow-right"></i>
                                </Link>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      {/* ))} */}
                    </SwiperSlide>
                  ))}
              </Swiper>

              {/* Left Arrow */}
              <div
                className="rbt-swiper-arrow rbt-arrow-left"
                style={{
                  position: "absolute",
                  left: "-50px", // Increased space from the box
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: "40px", // Width of the round arrow box
                  height: "40px", // Height of the round arrow box
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#26377a", // Red background color
                  borderRadius: "50%", // Round shape
                  color: "white", // White icon color
                  border: "none", // Remove border
                }}
              >
                <i className="rbt-icon feather-arrow-left"></i>
              </div>

              {/* Right Arrow */}
              <div
                className="rbt-swiper-arrow rbt-arrow-right"
                style={{
                  position: "absolute",
                  right: "-50px", // Increased space from the box
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  width: "40px", // Width of the round arrow box
                  height: "40px", // Height of the round arrow box
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#26377a", // Red background color
                  borderRadius: "50%", // Round shape
                  color: "white", // White icon color
                  border: "none", // Remove border
                }}
              >
                <i className="rbt-icon feather-arrow-right"></i>
              </div>
            </div>

            <div
              className="rbt-swiper-pagination"
              style={{ bottom: "0", position: "relative" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamEight;
