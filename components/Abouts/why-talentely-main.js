import Image from "next/image";
import Link from "next/link";

import AboutData from "../../data/elements/about.json";
import { useParallax } from "react-scroll-parallax";

import aboutImg7 from "../../public/images/about/about-07.jpg";
import aboutImg8 from "../../public/images/about/about-08.jpg";
import aboutImg9 from "../../public/images/about/about-09.jpg";

const WhyTalentely = () => {
  const { ref: ref1, style: style1 } = useParallax({
    translateY: [0, -20],
  });

  const { ref: ref2, style: style2 } = useParallax({
    translateY: [0, 20],
  });

  const { ref: ref3, style: style3 } = useParallax({
    translateY: [0, 20],
  });
  return (
    <div className="container">
      {AboutData.aboutOne.map((data, index) => (
        <div className="row g-5 align-items-center" key={index}>
          <div className="col-lg-6">
            <div className="thumbnail-wrapper">
              <div className={`thumbnail image-1`} ref={ref1} style={style1}>
                <Image
                  src={aboutImg7}
                  width={366}
                  height={490}
                  alt="Education Images"
                />
              </div>
              <div className={`thumbnail image-2`} ref={ref2} style={style2}>
                <Image
                  src={aboutImg9}
                  width={308}
                  height={250}
                  alt="Education Images"
                />
              </div>
              <div className={`thumbnail image-3`} ref={ref3} style={style3}>
                <Image
                  src={aboutImg8}
                  width={405}
                  height={490}
                  alt="Education Images"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="inner pl--50 pl_sm--0 pl_md--0">
              <div className="section-title text-start">
                <span className="subtitle bg-coral-opacity">{data.tag}</span>
                <h2 className="title" >
                  {data.title} <br /> {data.subTitle}
                </h2>
              </div>
              <p className="description mt--30">{data.desc}</p>
              <h4>Our Core Values</h4>
              {data.children.map((item, innerIndex) => (
                <div className="rbt-feature-wrapper mt--40" key={innerIndex}>
                  <div className="rbt-feature feature-style-1">
                    <div
                      className={`icon ${
                        item.isPrimary
                          ? "bg-primary-opacity"
                          : "bg-pink-opacity"
                      }`}
                    >
                      <i className={item.icon}></i>
                    </div>

                    <div className="feature-content">
                      <h6 className="feature-title">{item.title}</h6>
                      <p className="feature-description">{item.info}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* <div className="row mt--60">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h2 className="title">
              More than 200k users hire faster with Talentely
            </h2>
            <h2 className="title"> Pre-trained Candidates </h2>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WhyTalentely;
