import Image from "next/image";
import Link from "next/link";

import BrandData from "../../data/elements/brands.json";

const BrandThree = (props) => {
  const { data } = props;

  // Ensure data is an array and not null or undefined
  const logoLengths = data?.map((item) => item?.logo?.length ?? 0) || [];

  // Find the maximum length of the logos
  const maxLogoLength = Math.max(...logoLengths);

  return (
    <div className="container">
      {data &&
        data?.map((data, index) => (
          <div className="row align-items-center" key={index}>
            <div className="col-lg-12">
              <div className="section-title text-center mb--40">
                <h4
                  className="rbt-card-title w-500"
                  style={{ fontSize: "24px" }}
                >
                  {data.title}
                </h4>
              </div>
              <ul className="brand-list brand-style-2 justify-content-center justify-content-lg-between">
                {data.logo.map((item, innerIndex) => (
                  <li
                    key={innerIndex}
                    style={
                      maxLogoLength <= 4
                        ? { flexBasis: "23% !important" }
                        : { flexBasis: "16.666% !important" }
                    }
                  >
                    <Link href="#">
                      <Image
                        src={item}
                        width={"100%"}
                        height={"100%"}
                        priority={true}
                        alt="Brand Image"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BrandThree;
