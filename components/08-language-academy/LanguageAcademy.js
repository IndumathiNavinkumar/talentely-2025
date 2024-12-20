import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import sal from "sal.js";

import BlogData from "../../data/blog/blog.json";
import CourseDetails from "../../data/course-details/courseData.json";
import Separator from "@/components/Common/Separator";

import client1 from "../../public/images/banner/banner-icon-1.jpg";
import client2 from "../../public/images/banner/banner-icon-2.jpg";
import client3 from "../../public/images/banner/banner-icon-3.jpg";
import client4 from "../../public/images/testimonial/client-12.png";
import languageClub from "../../public/images/banner/language-club.png";
import SingleCourseData from "../../data/pages/11-singleCourse.json";

import CategoryFour from "../Category/CategoryFour";
import Counter from "../Counters/Counter";
import AboutTwo from "../Abouts/About-Two";
import CountDownTwo from "../Counters/CountDownTwo";
import { ParallaxProvider } from "react-scroll-parallax";
import Card from "../Cards/Card";
import BrandThree from "../Brand/Brand-Three";
import BrandTwo from "../Brand/Brand-Two";
import CategoryOne from "../Category/CategoryOne";
import CallToActionSix from "../Call-To-Action/CallToAction-Six";
import AdvanceTabFour from "../AdvanceTab/AdvanceTab-Four";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top";
import SingleCourseProp from "../11-single-course/SingleCourseProp";
import TeamEight from "../Team/TeamEight";
import aluminiLogo1 from "../../public/images/alumini/1.png";
import aluminiLogo2 from "../../public/images/alumini/2.png";
import aluminiLogo3 from "../../public/images/alumini/3.png";
import aluminiLogo4 from "../../public/images/alumini/4.png";
import aluminiLogo5 from "../../public/images/alumini/5.png";
import recogLogo1 from "../../public/images/recognize/1.png";
import recogLogo2 from "../../public/images/recognize/2.png";
import recogLogo3 from "../../public/images/recognize/3.png";
import recogLogo4 from "../../public/images/recognize/4.png";

import recognize1 from "../../public/images/recognize/img-1.jpg";
import recognize2 from "../../public/images/recognize/img-2.jpg";
import recognize3 from "../../public/images/recognize/img-3.jpg";

import containerLogo1 from "../../public/images/recognize/logo-1.png";
import containerLogo2 from "../../public/images/recognize/logo-2.png";
import containerLogo3 from "../../public/images/recognize/logo-3.png";
import containerLogo4 from "../../public/images/recognize/logo-4.png";
import containerLogo5 from "../../public/images/recognize/logo-5.png";
import containerLogo6 from "../../public/images/recognize/logo-6.png";
import containerLogo7 from "../../public/images/recognize/logo-7.png";
import containerLogo8 from "../../public/images/recognize/logo-8.png";
import containerLogo9 from "../../public/images/recognize/logo-9.png";
import containerLogo10 from "../../public/images/recognize/logo-10.png";
import containerLogo11 from "../../public/images/recognize/logo-11.png";
import containerLogo12 from "../../public/images/recognize/logo-12.png";

import aca_1 from "../../public/images/scroll/log-1.png";
import aca_2 from "../../public/images/scroll/log-2.png";
import aca_3 from "../../public/images/scroll/log-3.png";
import aca_4 from "../../public/images/scroll/log-4.png";
import aca_5 from "../../public/images/scroll/log-1.png";
import aca_6 from "../../public/images/scroll/log-2.png";
import aca_7 from "../../public/images/scroll/log-3.png";
import aca_8 from "../../public/images/scroll/log-4.png";
import { Awards, brand, companies, Solutiion } from "@/utils.js/constant.utils";

import CourseTagTwo from "../Common/CourseTag-Two";
import CounterTwo from "../Counters/Counter-Two";

import dynamic from "next/dynamic";

const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => <span>00</span>,
});

import useFetch from "@/context/useFetch";

import CounterData from "../../data/elements/counter.json";
import CardFive from "../Cards/Card-Five";
import CallToActionFive from "../Call-To-Action/CallToAction-Five";
import CardSolution from "../Cards/Card-Solutiion";

const LanguageAcademy = () => {
  let getAllCourse = JSON.parse(JSON.stringify(CourseDetails.languageAcademy));

  const { values } = useFetch(CounterData, "counterTwo");

  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  const data = [
    {
      logo: "/images/banner/banner-img-1.jpg",
      discount: "-40% Off",
      lession: 12,
      students: 50,
      title: "Stay competitive",
      content: "",
      rating: 5,
      review: 15,
      desc: "Future-proof your career with cutting-edge courses and stay competitive to meet evolving job market needs",
    },
    {
      logo: "/images/banner/banner-img-2.jpg",
      discount: "-40% Off",
      lession: 12,
      students: 50,
      title: "Tailored courses",
      content: "",
      rating: 5,
      review: 15,
      desc: "We provide courses for both beginners and experienced professionals to achieve career success.",
    },
  ];

  const alumini = [
    {
      title: "Alumini Insights, Your Competitve Edge",
      logo: [
        aluminiLogo1,
        aluminiLogo2,
        aluminiLogo3,
        aluminiLogo4,
        aluminiLogo5,
      ],
    },
  ];

  const recognize = [
    {
      title: "Recognized for Excellence",
      logo: [recogLogo1, recogLogo2, recogLogo3, recogLogo4],
    },
  ];

  const shipping = {
    counterOne: [
      {
        body: [
          {
            text: "Universities & Colleges on Board",
            num: 700,
            top: true,
          },
          {
            text: "Companies Hired with Us",
            num: 2600,
            top: false,
          },
          {
            text: "Freshers Ready<br/> to Deploy",
            num: 4500,
            top: true,
          },
          {
            text: "TPO Connects across India ",
            num: 8000,
            top: false,
          },
        ],
      },
    ],
  };

  // const brand = [
  //   {
  //     img: brandLogo1,
  //     linkURL: "https://www.edureka.co/",
  //   },
  //   {
  //     img: brandLogo2,
  //     linkURL: "https://www.sixphrase.com/",
  //   },
  //   {
  //     img: brandLogo3,
  //     linkURL: "https://phire.in/home/",
  //   },
  //   {
  //     img: brandLogo4,
  //     linkURL: "https://www.thesmartbridge.com",
  //   },
  //   {
  //     img: brandLogo5,
  //     linkURL: "https://bassure.com/",
  //   },
  //   {
  //     img: brandLogo6,
  //     linkURL: "https://www.verandavarsity.com",
  //   },
  //   {
  //     img: brandLogo7,
  //     linkURL: "https://www.tapasyaedu.com",
  //   },
  //   {
  //     img: brandLogo8,
  //     linkURL: "https://verandak12.com",
  //   },
  //   {
  //     img: brandLogo9,
  //     linkURL: "https://verandaias.com",
  //   },
  //   {
  //     img: brandLogo10,
  //     linkURL: "https://verandahighered.com",
  //   },
  //   {
  //     img: brandLogo11,
  //     linkURL: "https://jkshahclasses.com",
  //   },
  //   {
  //     img: brandLogo12,
  //     linkURL: "https://verandarace.com",
  //   },
  // ];

  const courseData = {
    content1: {
      img: recognize1,
      title: `Talentely is recognized and accredited by leading Industry & Education bodies, including:`,
      desc: "we continuously strive for excellence - Our global recognition validates our commitment to sustaining standards in imparting education.",
      imgs: [
        containerLogo1,
        containerLogo2,
        containerLogo3,
        containerLogo4,
        containerLogo5,
        containerLogo6,
        containerLogo7,
        containerLogo8,
        containerLogo9,
        containerLogo10,
        containerLogo11,
        containerLogo12,
      ],
    },
    content2: {
      img: recognize2,
      title: `Awards`,
      desc: "We've been honoured with numerous awards for our commitment to innovation and for consistently delivering outstanding results.",
    },
    content3: {
      img: recognize3,
      title: `Why Talentely?`,
      desc: "We provide industry-focused staffing and training solutions to drive success.",
      subContent: [
        {
          text: "Top-tier talent",
        },
        {
          text: "Thorough screening",
        },
        {
          text: "Rapid Deployment",
        },
        {
          text: "Specialized training",
        },
        {
          text: "Diverse talent pool",
        },
      ],
    },
  };

  const academic = [aca_1, aca_2, aca_3, aca_4, aca_5, aca_6, aca_7, aca_8];

  return (
    <>
      <div className="rbt-banner-area rbt-banner-7 bg-gradient-1 theme-shape header-transperent-spacer">
        <div className="wrapper w-100">
          <div className="container">
            <div className="row g-5 justify-content-between align-items-center">
              <div className="col-lg-6 ">
                <div
                  className="content"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="inner">
                    <div className="section-title text-center">
                      <span className="subtitle bg-primary-opacity">
                        Transform Your Hiring Process with Talentely
                      </span>
                    </div>

                    <h3 className="title mobile-center">
                      Access Top Talent,
                      <br />
                      <span className="theme-gradient"> No Costs</span>
                      {""} & Accelerate
                      <br />
                      <span> Recruitment Cycles</span>
                    </h3>
                    <div className="rbt-like-total">
                      <div className="profile-share mobile-center">
                        <div
                          className="avatar-group mobile-center"
                          style={{ display: "flex", marginRight: "20px" }}
                        >
                          <div className="avatar">
                            <Image
                              src={client1}
                              width={55}
                              height={55}
                              alt="education"
                            />
                          </div>
                          <div className="avatar">
                            <Image
                              src={client2}
                              width={55}
                              height={55}
                              alt="education"
                            />
                          </div>
                          <div className="avatar">
                            <Image
                              src={client3}
                              width={55}
                              height={55}
                              alt="education"
                            />
                          </div>
                        </div>
                        <div className="more-author-text mobile-center">
                          <h5 className="total-join-students">
                            4500+ Trained Developers
                          </h5>
                          <p className="subtitle">Ready to Deploy</p>
                        </div>
                      </div>
                    </div>
                    <div className="rbt-button-group justify-content-start mt--30 mobile-center">
                      <Link
                        className="rbt-btn btn-gradient rbt-switch-btn"
                        href="/contact"
                        style={{
                          height: "53px",
                          lineHeight: "53px",
                          fontSize: "14px",
                        }}
                      >
                        <span data-text="Hire From Us">Hire From Us</span>
                      </Link>
                      {/* <Link
                        className="rbt-btn btn-border rbt-switch-btn"
                        href="#"
                        style={{
                          height: "53px",
                          lineHeight: "53px",
                          fontSize: "14px",
                        }}
                      >
                        <span data-text="Find Courses">Find Courses</span>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {/* <div className="row g-5">
                  <Card
                    col="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                    mt=""
                    start={0}
                    end={2}
                    isDesc={false}
                    isUser={false}
                    data={data}
                  />
                </div> */}
                <div className="conter-style-2">
                  {CounterData &&
                    CounterData.counterTwo.map((data, index) => (
                      <div className="container" key={index}>
                        <div className="row g-5 align-items-center">
                          <div className="row row--30">
                            {data.body.map((item, innerIndex) => (
                              <div
                                className={`col-lg-6 col-md-6 col-sm-6 col-12`}
                                key={innerIndex}
                              >
                                <div className="rbt-counterup rbt-hover-03">
                                  <div className="inner">
                                    <div className="icon">
                                      <Image
                                        src={item.img}
                                        width={100}
                                        height={100}
                                        alt="Icons Images"
                                      />
                                    </div>
                                    <div className="content">
                                      <h3 className="counter">
                                        <span className="odometer">
                                          <Odometer
                                            value={
                                              values[
                                                index * data.body.length +
                                                  innerIndex
                                              ]
                                            }
                                          />
                                        </span>{" "}
                                        <span className="laksh-span-text">
                                          {item?.data}
                                        </span>
                                      </h3>
                                      <span className="subtitle">
                                        {item.text}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="rbt-categories-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row g-5">
            <CategoryFour />
          </div>
        </div>
      </div> */}
      {/* <div className="rbt-brand-area bg-color-white ptb--60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <BrandThree data={alumini} />
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
      <Separator />

      <div className="rbt-brand-area bg-color-white ptb--60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <BrandThree data={recognize} />
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div> */}

      <div className="rbt-course-area bg-color-white ptb--60">
        <div className="container">
          <div className="row mb--20 ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Excellence in Learning
                </span>
                <h2 className="title sectionHeading">Our Solutions</h2>
                <p className="description has-medium-font-size mt--20 mb--0">
                TALENTELY has 3 components, LMS – Learning Management System, PMS – Profile Management System and TMS – Talent Management System.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-5">
            <CardSolution data={Solutiion} />
          </div>
        </div>
      </div>

      <div className="rbt-counterup-area ptb--60  bg-color-white ">
        <div className="container">
          <div className="row mb--50 ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Empowering Talent, Building Futures
                </span>
                <div>
                  <h2 className="title sectionHeading">
                    Shaping Careers and Connecting
                    <br />
                    Top Talent Since 1983
                  </h2>
                </div>
                <p
                  className="description has-medium-font-size mt--20 mb--0"
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "black",
                  }}
                >
                  We are at the forefront of shaping careers and connecting top
                  talent with leading companies, helping countless professionals
                  and businesses thrive in a competitive world
                </p>
              </div>
            </div>
          </div>
          <Counter head={false} data={shipping} />
        </div>
      </div>

      <div className="rbt-counterup-area ptb--60 bg-theme-lightblue ">
        <div className="container">
          <div className="row mb--20 ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  {" "}
                  Working in synergy to drive growth
                </span>
                <h2 className="title sectionHeading">Our Brands</h2>
                {/* <p className="description has-medium-font-size mt--20 mb--0">
                  Language Academic?
                </p> */}
              </div>
            </div>
          </div>
          <div className="row rbt-brand-area ">
            <CategoryOne data={brand} />
          </div>
        </div>
      </div>

      {/* [#37A282] */}
      <div className="rbt-course-banner-area bg-color-green ptb--60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div
                  className="section-title text-center"
                  style={{
                  //  borderBottom: "1px solid #646da8",
                    marginBottom: "3px",
                  }}
                >
                  <span className="subtitle bg-secondary-opacity-new">
                    Accredited for sustaining global standards
                  </span>
                  <h2
                    className="title color-black-dark sectionHeading"
                    style={{ marginBottom: "30px" }}
                  >
                    {/* Recognions and Accreditations */}
                    Recognitions and Accreditations
                  </h2>
                  {/* <p className="description has-medium-font-size mt--20 mb--0">
                    Language Academic?
                  </p> */}
                  {/* <Link
                    className="rbt-btn hover-icon-reverse btn-border color-white-off mt--30 mb--30"
                    href="#"
                    style={{
                      padding: "0px 22px",
                      lineHeight: "53px",
                      height: "53px",
                    }}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Know More</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link> */}
                </div>

                <div className="row g-5">
                  <SingleCourseProp
                    // courseData={SingleCourseData.certificate}
                    // image={true}
                    data={courseData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="rbt-program-area ptb--60 bg-color-white" id="program">
        <div className="container">
          <div className="row g-5 align-items-end mb--40">
            <div className="section-title text-center">
              <span className="subtitle bg-primary-opacity">
                Recognitions and Accreditations
              </span>
              <h2 className="title sectionHeading">Awards</h2>
            </div>
          </div>

          <div className="row g-5">
            {Awards.map((item, i) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                <div className="rbt-category-gallery">
                  <div className="thumbnail">
                    <Link href="#">
                      <Image
                        src={item.img}
                        property="true"
                        alt="Gallery Images"
                      />
                      <div className="rbt-bg-overlay"></div>
                    </Link>
                    <div
                      className="hover-content"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <h3
                        className="title"
                        style={{
                          width: "60%",
                          fontSize: "24px",
                          lineHeight: "36px",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <div className="rbt-course-area bg-color-white ptb--60">
        <div className="container">
          <div className="row mb--20 ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Excellence in Learning
                </span>
                <h2 className="title sectionHeading">Awards & Accolades</h2>
                {/* <p className="description has-medium-font-size mt--20 mb--0">
                  Language Academic?
                </p> */}
              </div>
            </div>
          </div>

          <div className="row g-5">
            <CardFive data={Awards} />
          </div>
        </div>
      </div>

      <div className=" bg-grey rbt-section-gap-own ptb--60">
        <div className="container">
          <div className="row  mb--40 ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity ">
                  Strong alliances to empower learning
                </span>
                <h2 className="title sectionHeading">Our Academic Partners</h2>
                {/* <p className="description has-medium-font-size mt--20 mb--0">
                  Language Academic?
                </p> */}
              </div>
            </div>
          </div>
          <CourseTagTwo />
        </div>
      </div>

      {/* <div className="rbt-course-category rbt-section-gap overflow-hidden">
        <div className="container">
          <div className="row mb--25">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h5 className="subtitle bg-secondary-opacity">
                  Histudy Feature Category
                </h5>
              </div>
            </div>
          </div>
          <CourseTagTwo />
        </div>
      </div> */}

      <div className="bg-color-white rbt-section-gap-own ptb--60">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-primary-opacity">
                  Industry-ready talent ideal for all sectors
                </span>
                <h2 className="title sectionHeading">
                  2500+ Companies Hire our
                  <br />
                  Pre-trained Candidates
                </h2>
                <p
                  className="description has-medium-font-size mt--20 mb--0"
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "black",
                  }}
                >
                  Our students are equipped with the expertise and skillsets
                  required to thrive in today’s competitive work environments.
                </p>
              </div>
            </div>
          </div>
          <BrandTwo data={companies} />
        </div>
      </div>

      <div
        className="rbt-call-to-action-area  bg-gradient-18 rbt-section-gap-own"
        style={{ padding: "60px" }}
      >
        <CallToActionFive />
      </div>
    </>
  );
};

export default LanguageAcademy;
