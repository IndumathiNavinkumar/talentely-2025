import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo/white-logo.png";
import logoLight from "../../public/images/dark/logo/logo-light.png";

import Nav from "./Nav";
import { useAppContext } from "@/context/Context";

const MobileMenu = () => {
  const { mobile, setMobile, isLightTheme } = useAppContext();

  return (
    <>
      <div className={`popup-mobile-menu ${mobile ? "" : "active"}`}>
        <div className="inner-wrapper" style={{ backgroundColor: "#26377a" }}>
          <div className="inner-top">
            <div className="content mb--30">
              <div className="logo">
                <Link href="/">
                  {isLightTheme ? (
                    <Image
                      src={logo}
                      width={152}
                      height={50}
                      priority={true}
                      alt="Education Logo Images"
                    />
                  ) : (
                    <Image
                      src={logoLight}
                      width={152}
                      height={50}
                      priority={true}
                      alt="Education Logo Images"
                    />
                  )}
                </Link>
              </div>
              <div className="rbt-btn-close">
                <button
                  className="close-button rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                >
                  <i className="feather-x"></i>
                </button>
              </div>
            </div>
            {/* <p className="description">
              Histudy is a education website template. You can customize all.
            </p> */}
            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <Link href="mailto:hiretalents@verandalearning.com">
                  <i className="feather-mail"></i>
                  hiretalents@verandalearning.com
                </Link>
              </li>
              <li>
                <a href="tel:9894261122">
                  <i className="feather-phone"></i>+91 9894261122
                </a>
              </li>
            </ul>
          </div>

          <Nav />

          <div className="mobile-menu-bottom">
            <div className="rbt-btn-wrapper mb--20">
              <Link
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                href="contact"
                style={{ boxShadow: "none" }}
              >
                <span>Hire From Us</span>
              </Link>
            </div>

            <div className="social-share-wrapper">
              <span
                className="rbt-short-title d-block"
                style={{ color: "#fff" }}
              >
                Find With Us
              </span>
              <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                <li>
                  <Link href="https://www.facebook.com/">
                    <i className="feather-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.twitter.com">
                    <i className="feather-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/">
                    <i className="feather-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkdin.com/">
                    <i className="feather-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
