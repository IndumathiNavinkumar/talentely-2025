import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Setting from "@/components/Student/Settings";
import StudentDashboardHeader from "@/components/Student/StudentDashboardHeader";
import StudentDashboardSidebar from "@/components/Student/StudentDashboardSidebar";
import Context from "@/context/Context";
import PageHead from "@/pages/Head";
import BackToTop from "@/pages/backToTop";
import Store from "@/redux/store";
import { Provider } from "react-redux";

const StudentSetting = () => {
  return (
    <>
      <PageHead title="Student Settings " />

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <div className="rbt-page-banner-wrapper">
            <div className="rbt-banner-image" />
          </div>
          <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <StudentDashboardHeader />

                  <div className="row g-5">
                    <div className="col-lg-3">
                      <StudentDashboardSidebar />
                    </div>

                    <div className="col-lg-9">
                      <Setting />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default StudentSetting;
