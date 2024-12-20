import { useState } from "react";
import Image from "next/image";
import img from "../../public/images/contact/contact-image.png";

const ContactForm = ({ gap }) => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    companyName: "",
    workEmail: "",
    mobileNumber: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    // try {
    //   const response = await fetch("https://formspree.io/f/xkgwerqo", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     setStatus("Success! Your message has been sent.");
    //     setFormData({
    //       name: "",
    //       designation: "",
    //       companyName: "",
    //       workEmail: "",
    //       mobileNumber: "",
    //       message: "",
    //     });
    //   } else {
    //     setStatus("Failed to send message.");
    //   }
    // } catch (error) {
    //   setStatus("An error occurred.");
    // }
  };

  return (
    <div className={`rbt-contact-address ${gap}`}>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="thumbnail">
              <Image
                className="w-100 radius-6"
                src={img}
                alt="Contact Images"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
              <div className="section-title text-start">
                <span className="subtitle bg-primary-opacity">
                  4500+ Trained developers available
                </span>
              </div>
              {/* <h3 className="title sectionHeading">Hire with Talentely</h3> */}
              {/* <form onSubmit={handleSubmit} className="rainbow-dynamic-form max-width-auto">
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="form-group">
                  <input
                    name="designation"
                    type="text"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Designation"
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="form-group">
                  <input
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="form-group">
                  <input
                    name="workEmail"
                    type="email"
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="Work Email"
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="form-group">
                  <input
                    name="mobileNumber"
                    type="number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                  />
                  <span className="focus-border"></span>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your Requirements"
                  ></textarea>
                  <span className="focus-border"></span>
                </div>
                <div className="form-submit-group">
                  <button
                    type="submit"
                    className="rbt-btn btn-md btn-gradient hover-icon-reverse "
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
                  </button>
                </div>
              </form>
              {status && <p>{status}</p>} */}
              <div>
                <iframe
                 
                  src="https://irepute.in/talentely-contact-form/"
                  allowFullScreen
                  title="Video Title"
                  style={{ width: "100%", height: "670px" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
