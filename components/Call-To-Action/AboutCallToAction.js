import Link from "next/link";

import CallToActionData from "../../data/elements/calltoaction.json";

const CallToActionSix = () => {
  return (
    <div className="container">
      {CallToActionData &&
        CallToActionData.AboutCollection?.map((data, index) => (
          <div
            className="row g-5 align-items-center content-wrapper"
            key={index}
          >
            {/* <div className="col-xxl-3 col-xl-3 col-lg-6">
              <div className="inner">
                <div className="content text-start">
                  <h5 className="title color-white mb--0">{data.title}</h5>
                </div>
              </div>
            </div> */}
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="inner-content text-start">
                <h3 className="color-white" style={{fontWeight:"500", marginBottom:"0px"}}>{data.desc}</h3>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="call-to-btn text-start text-xl-end">
                <Link
                  className="rbt-btn btn-white hover-icon-reverse"
                  href="#"
                  style={{
                    padding: "0px 22px",
                    lineHeight: "53px",
                    height: "53px",
                  }}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Join Now </span>
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
        ))}
    </div>
  );
};

export default CallToActionSix;
