import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import sal from "sal.js";

import CardData from "../../data/elements/card";

const CardSolution = (props) => {
  const { data } = props;
  console.log("✌️data --->", data);
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  return (
    <>
      {data &&
        data.map((item, innerIndex) => {
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12 mt--30"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
              key={innerIndex}
            >
              <div className="rbt-card variation-03 rbt-hover">
                <div className="rbt-card-img">
                  <Image
                    src={item.img}
                    width={355}
                    height={244}
                    alt="Card image"
                  />
                </div>
                <div className="mt--20">
                  <h5 className="rbt-card-title" style={{fontWeight:'500'}} dangerouslySetInnerHTML={{__html:item.title}}></h5>
                  <p>{item.subTitle}</p>
                  <div className="btn-text link-txt">
                    <Link href={`${item.LinkURl}`}>{item.linkname}</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CardSolution;
