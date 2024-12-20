import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useAppContext } from "@/context/Context";

import Nav from "../Nav";
import User from "../Offcanvas/User";
import SearchWithCategory from "../Category/SearchWithCategory";

import logo from "../../../public/images/logo/white-logo.png";
import logoLight from "../../../public/images/dark/logo/logo-light.png";

const HeaderTen = ({
  headerType,
  gapSpaceBetween,
  sticky,
  headerSticky,
  navigationEnd,
  container,
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const {
    mobile,
    setMobile,
    search,
    setSearch,
    cartToggle,
    setCart,
    isLightTheme,
  } = useAppContext();

  const { total_items } = useSelector((state) => state.CartReducer);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        style={{ backgroundColor: "#26377a" }}
        className={`rbt-header-wrapper  rbt-header-wrapper height-50 ${gapSpaceBetween} ${sticky}  ${
          !headerType && isSticky ? `${headerSticky}` : ""
        }`}
      >
        <div className={`${container}`}>
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>
            {/* <div className="header-left d-block d-xl-none">
              <div className="header-info">
                <ul className="quick-access">
                  <li className="access-icon">
                    <Link
                      className={`search-trigger-active rbt-round-btn ${
                        search ? "" : "open"
                      }`}
                      href="#"
                      onClick={() => setSearch(!search)}
                    >
                      <i className="feather-search color-white"></i>
                    </Link>
                  </li>

                  <li className="access-icon">
                    <Link className="rbt-round-btn" href="wishlist.html">
                      <i className="feather-heart color-white"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="header-center d-block d-xl-none">
              <div className="logo">
                <Link href="/">
                  {/* {isLightTheme ? ( */}
                  <Image
                    src={logo}
                    width={"100%"}
                    height={"100%"}
                    priority={true}
                    alt="Education Logo Images"
                  />
                  {/* ) : (
                    <Image
                      src={logoLight}
                      width={"100%"}
                      height={"100%"}
                      priority={true}
                      alt="Education Logo Images"
                    />
                  )} */}
                </Link>
              </div>
            </div>

            <div className="rbt-main-navigation d-none d-xl-block bg-[#df310c]">
              <Nav />
            </div>

            <div className="header-right">
              {/* <div className="d-block d-xl-none">
                <ul className="quick-access">
                  <li className="access-icon rbt-mini-cart">
                    <Link
                      className="rbt-cart-sidenav-activation rbt-round-btn "
                      href="#"
                      onClick={() => setCart(!cartToggle)}
                    >
                      <i className="feather-shopping-cart color-white"></i>
                      <span className="rbt-cart-count">{total_items}</span>
                    </Link>
                  </li>
                  <li className="access-icon rbt-user-wrapper right-align-dropdown">
                    <Link className="rbt-round-btn" href="#">
                      <i className="feather-user color-white"></i>
                    </Link>
                    <User />
                  </li>
                </ul>
              </div> */}

              <div className="mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <button
                    className="hamberger-button rbt-round-btn ms-auto"
                    onClick={() => setMobile(!mobile)}
                  >
                    <i className="feather-menu color-white"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SearchWithCategory />
      </div>
    </>
  );
};

export default HeaderTen;
