import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import Contact from "@/components/Contacts/Contact";
import ContactForm from "@/components/Contacts/Contact-Form";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";
import CounterTwo from "@/components/Counters/Counter-Two";
import CounterThree from "@/components/Counters/Counter-Three";
import AccordionThree from "@/components/Accordions/Accordion-Three";
import TeamThree from "@/components/Team/TeamThree";
import FooterThree from "@/components/Footer/Footer-Three";
import HeaderStyleThree from "@/components/Header/HeaderStyle-Three";
import CategoryOne from "@/components/Category/CategoryOne";
import TeamData from "../../data/elements/team.json";

const ContactPage = () => {
  return (
    <>
      <PageHead title="Contact " />

      <Provider store={Store}>
        <Context>
          <HeaderStyleThree
            headerType="rbt-transparent-header"
            headerSticky="rbt-sticky"
          />
          <MobileMenu />
          <Cart />

          <div className="rbt-counterup-area bg-color-white rbt-section-gap">
            <CounterThree />
          </div>

          <div className="rbt-accordion-area accordion-style-1 bg-color-extra2 rbt-section-gap">
            <AccordionThree />
          </div>

       

          {/* <div className="rbt-conatct-area bg-gradient-11 rbt-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--60">
                    <span className="subtitle bg-secondary-opacity">
                      Contact Us
                    </span>
                    <h2 className="title">
                      Histudy Course Contact <br /> can join with us.
                    </h2>
                  </div>
                </div>
              </div>
              <Contact />
            </div>
          </div> */}
          <div className="rbt-team-area bg-color-white rbt-section-gap">
            <ContactForm />
          </div>

      
          {/* <div className="rbt-google-map bg-color-white ">
            <iframe
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
              height="600"
              style={{ border: "0" }}
            ></iframe>
          </div> */}

          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default ContactPage;
