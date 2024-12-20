import Link from "next/link";

import CallToActionData from "../../data/elements/calltoaction.json";
import Image from "next/image";
import HireNowImage from "../../public/images/contact/hire-now.png";

const CallToActionSix = () => {
  return (
    <div className="container">
      {/* {CallToActionData &&
        CallToActionData.collectionSix.map((data, index) => ( */}
      <div
        className="row g-5  content-wrapper align-items-center"
        // key={index}
      >
        {/* <div className="col-xxl-3 col-xl-3 col-lg-6"> */}
        {/* <div className="inner">
            <div className="content text-start">
              <h2
                className="title color-white mb--0"
                style={{ fontWeight: "normal" }}
              >
                Hire From Us
              </h2>
            </div>
          </div> */}
        {/* </div> */}
        {/* <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="inner-content text-start">
            <p className="color-white pt--10">
              4500+ Trained Developers Available
            </p>
          </div>
        </div> */}
        <div className="col-xxl-3 col-xl-3 col-lg-3">
          <div>
            <Image
              src={HireNowImage}
              alt="Image"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6">
          <div className="inner-content text-start ">
            <h3
              className="title color-white"
              style={{ fontWeight: "500", marginBottom: "0px" }}
            >
              4500+ Trained Developers Available
            </h3>
            {/* <h4 className="color-white">{data.desc}</h4> */}
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3">
          <div className="call-to-btn text-start text-xl-end">
            <Link
              className="rbt-btn btn-white hover-icon-reverse"
              href="contact"
              style={{
                padding: "0px 30px",
                height: "54px",
                lineHeight: "55px",
                fontSize: "14px",
              }}
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Hire Now</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default CallToActionSix;
