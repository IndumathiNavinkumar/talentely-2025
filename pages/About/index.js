import Context from "@/context/Context";
import Link from "next/link";
import { Provider } from "react-redux";
import { ParallaxProvider } from "react-scroll-parallax";
import Store from "@/redux/store";

import Banner from "@/components/About-Us-01/Banner";
import Teacher from "@/components/About-Us-01/Teacher";
import About from "@/components/Abouts/About";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import NewsletterTwo from "@/components/Newsletters/Newsletter-Two";
import SplitTwo from "@/components/Split/Split-Two";
import PageHead from "@/pages/Head";
import BackToTop from "@/pages/backToTop";
import TestimonialSix from "@/components/Testimonials/Testimonial-Six";
import HeaderStyleThree from "@/components/Header/HeaderStyle-Three";
import FooterThree from "@/components/Footer/Footer-Three";
import BrandTwo from "@/components/Brand/Brand-Two";
import { companies } from "@/utils.js/constant.utils";
import CallToActionSix from "@/components/Call-To-Action/CallToAction-Six";
import AboutCallToAction from "@/components/Call-To-Action/AboutCallToAction";
import AdmissionArea from "@/components/Admission-Guide/AdmissionArea";

const AboutUsPage = () => {
  return (
    <>
      <PageHead title="About Us" />
      <Provider store={Store}>
        <Context>
          {/* <HeaderStyleTen headerSticky="rbt-sticky" headerType="" /> */}
          <HeaderStyleThree
            headerType="rbt-transparent-header"
            headerSticky="rbt-sticky"
          />
          <MobileMenu />
          <Cart />

          {/* <div
            className="slider-area rbt-banner-10 height-750 bg_image bg_image--11"
            data-black-overlay="5"
          >
            <Banner />
          </div> */}
          <div className="rbt-about-area about-style-1 bg-color-white pt--100">
            <ParallaxProvider>
              <About />
            </ParallaxProvider>
          </div>

          <div className="rbt-brand-area bg-color-extra2  rbt-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <span className="subtitle bg-primary-opacity">
                      VEHICULA LABORTIS
                    </span>
                    <h2 className="title sectionHeading">
                      More than 200k users hire faster
                      <br />
                      with Talentely
                    </h2>

                    {/* <p className="description has-medium-font-size mt--20 mb--0">
                      Master Python by building 100 projects in 100 days. Learn
                      data science, automation, build websites, games and apps
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <BrandTwo data={companies} />
          </div>

          {/* <div className="rbt-video-area rbt-section-gapBottom pt--50 bg-color-white">
            <div className="container">
              <SplitTwo isImg={false} />
            </div>
          </div> */}
          {/* <div className="rbt-testimonial-area bg-color-white rbt-section-gapBottom overflow-hidden">
            <div className="container-fluid">
              <div className="row g-5 align-items-center">
                <div className="col-xl-3">
                  <div className="section-title pl--100 pl_md--30 pl_sm--0">
                    <span className="subtitle bg-pink-opacity">
                      Learners Feedback
                    </span>
                    <h2 className="title">What Our Learners Say</h2>
                    <p className="description mt--20">
                      Learning communicate to global world and build a bright
                      future with our histudy.
                    </p>
                    <div className="veiw-more-btn mt--20">
                      <Link
                        className="rbt-btn btn-gradient rbt-marquee-btn marquee-text-y"
                        href="#"
                      >
                        <span data-text="Marquee Y">Contact Us</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <TestimonialSix />
              </div>
            </div>
          </div> */}
          {/* <Teacher /> */}
          <div className="rbt-admission-area bg-color-white rbt-section-gap">
            <div className="container">
              <AdmissionArea />
            </div>
          </div>

          <div className="rbt-call-to-action-area  bg-gradient-16 rbt-section-gap-own">
            <AboutCallToAction />
          </div>

          <BackToTop />
          {/* <FooterOne /> */}
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default AboutUsPage;
