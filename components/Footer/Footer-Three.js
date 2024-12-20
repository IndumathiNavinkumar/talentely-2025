import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo/white-logo.png";

import logoLight from "../../public/images/dark/logo/logo-light.png";

import FooterData from "../../data/footer.json";
import SingleFooter from "./FooterProps/SingleFooter";
import CopyRight from "./CopyRight";
import { useAppContext } from "@/context/Context";

const FooterThree = () => {
  const { isLightTheme } = useAppContext();
  return (
    <>
      <footer className="rbt-footer footer-style-1">
        <div
          className="footer-top"
          style={{ paddingTop: "60px", paddingBottom: "60px" }}
        >
          <div className="container">
            {FooterData &&
              FooterData.footerOne.map((footer, index) => (
                <div className="row row--15 mt_dec--30" key={index}>
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt--30">
                    <div className="footer-widget">
                      <div className="logo">
                        <Link href="/">
                          {isLightTheme ? (
                            <Image
                              src={logo}
                              width={"100%"}
                              height={"100%"}
                              priority={true}
                              alt="Education Logo Images"
                            />
                          ) : (
                            <Image
                              src={logo}
                              width={152}
                              height={50}
                              priority={true}
                              alt="Education Logo Images"
                            />
                          )}
                        </Link>
                      </div>

                      <p className="description mt--20" style={{color:"#000"}}>
                        {footer.description}
                      </p>

                      <div className="contact-btn mt--30">
                        <Link
                          className="rbt-btn-new hover-icon-reverse  radius-round"
                          href="contact"
                        >
                          <div className="icon-reverse-wrapper">
                            <span className="btn-text">Contact Us</span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                            <span className="btn-icon">
                              <i className="feather-arrow-right"></i>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <SingleFooter
                    classOne="offset-lg-1 col-lg-2 col-md-6 col-sm-6 col-12 mt--30"
                    title="Quick Links"
                    footerType={footer.usefulLinks}
                  />
                  {/* <SingleFooter
                    classOne="offset-lg-1 col-lg-2 col-md-6 col-sm-6 col-12 mt--30"
                    title="Our Companies"
                    footerType={footer.usefulLinks}
                  /> */}

                  <SingleFooter
                    classOne="col-lg-2 col-md-6 col-sm-6 col-12 mt--55"
                    title=""
                    footerType={footer.ourCompany}
                  />

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30">
                    <div className="footer-widget">
                      <h5 className="ft-title-new">Contact Us</h5>
                      <ul className="ft-link">
                        <li>
                          <span>Phone:</span>{" "}
                          <Link href="tel:9894261122">{footer.phone}</Link>
                        </li>
                        <li>
                          <span>E-mail:</span>{" "}
                          <Link href="mailto:hiretalents@verandalearning.com">
                            {footer.mail}
                          </Link>
                        </li>
                        {/* <li>
                          <span>Location:</span> {footer.address}
                        </li> */}
                      </ul>
                      <ul className="social-icon social-default icon-naked justify-content-start mt--20">
                        {footer.socialLink.map((value, innerIndex) => (
                          <li
                            key={innerIndex}
                            style={{
                              border: "1px solid #0077b7",
                              borderRadius: "5px",
                              padding: "0px 5px 2px 5px",
                              background: "#0077b7",
                            }}
                          >
                            <Link href={value.link} target="_blank">
                              <i className={`${value.icon} color-white`}></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </footer>
      <CopyRight />
    </>
  );
};

export default FooterThree;
