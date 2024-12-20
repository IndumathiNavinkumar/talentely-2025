import Image from "next/image";
import Link from "next/link";

import ServiceData from "../../data/elements/service.json";

const ServiceEleven = () => {
  return (
    <>
      {ServiceData &&
        ServiceData.serviceEleven.map((data, index) => (
          <div className="container" key={index}>
            <div className="row row--15 mt_dec--30">
              {data.body.map((item, innerIndex) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
                  key={innerIndex}
                >
                  <div className="rbt-flipbox variation-2">
                    <div
                      className={`rbt-flipbox-wrap rbt-service rbt-service-1 ${
                        item.bgOne
                          ? "card-bg-1"
                          : "" || item.bgTwo
                          ? "card-bg-2"
                          : "" || item.bgThree
                          ? "card-bg-3"
                          : "" || item.bgFour
                          ? "card-bg-4"
                          : ""
                      }`}
                    >
                      <div className="rbt-flipbox-front rbt-flipbox-face inner">
                        <div className="front-thumb w-100">
                          <Image
                            src={item.imgFront}
                            width={490}
                            height={300}
                            alt="card-icon"
                          />
                        </div>
                        <div className="content">
                          <h5 className="title">{item.title}</h5>
                          <ul className="rbt-list-style-3">
                            {item.list.map((listItem, innerIndex) => (
                              <li key={innerIndex}>
                                <i className={listItem.icon}></i>{" "}
                                {listItem.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="rbt-flipbox-back rbt-flipbox-face inner">
                        <div className="flip-back-top">
                          <div className="back-thumb w-100">
                            <Image
                              className="w-100 radius-10"
                              src={item.img}
                              width={490}
                              height={300}
                              alt="card-icon"
                            />
                          </div>
                          <div className="content">
                            <h5 className="title">{item.title}</h5>
                            <ul className="rbt-list-style-3">
                              {item.list.map((listItem, innerIndex) => (
                                <li key={innerIndex}>
                                  <i className={listItem.icon}></i>{" "}
                                  {listItem.text}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default ServiceEleven;
