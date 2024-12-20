import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

import videoImg from "../../public/images/others/aboutGlobe.webp";

const AdmissionArea = () => {
  return (
    <>
      <div className="row g-5 align-items-center">
        <div
          className="col-lg-6"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Image src={videoImg} width={250} height={250} alt="Video Images" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="addmission-guide-content pl--50 pl_sm--0 pl_md--0 pl_lg--0">
            <h3 className="title sectionHeading">Talentely Locations</h3>
            <p style={{ marginBottom: "20px", marginTop: "10px" }}>
              Primarily located and headquartered in Chennai, India. Talentely
              has grown and expanded to cover the whole India as well as other
              parts of the world. Join our team! Discover
            </p>
            <h5 style={{ fontWeight: "normal" }}>Chennai, India</h5>

            {/* <div className="apply-btn">
              <a
                className="rbt-btn btn-gradient radius-round icon-hover"
                href="#"
              >
                <span className="btn-text">Applying to University</span>
                <span className="btn-icon">
                  <i className="feather-arrow-right"></i>
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionArea;
