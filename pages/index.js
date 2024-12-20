import PageHead from "./Head";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Separator from "@/components/Common/Separator";
import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import FooterThree from "@/components/Footer/Footer-Three";
import HeaderStyleThree from "@/components/Header/HeaderStyle-Three";
import LanguageAcademy from "@/components/08-language-academy/LanguageAcademy";
import OnlineCourse from "@/components/10-online-course/OnlineCourse";
import BackToTop from "./backToTop";
import UniversityBanner from "@/components/13-university-classic/UniversityBanner";

const Home = () => {
  return (
    <>
      <PageHead title="Home" />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleThree
            headerType="rbt-transparent-header"
            headerSticky="rbt-sticky"
          />
          <div className="rbt-slider-main-wrapper position-relative">
        <UniversityBanner />
      </div>
          {/* <Cart /> */}

          {/* <OnlineCourse />  */}
          <LanguageAcademy />

          <BackToTop />
          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default Home;
