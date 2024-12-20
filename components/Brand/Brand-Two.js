import Image from "next/image";
import Link from "next/link";

import BrandData from "../../data/elements/brands.json";

const BrandTwo = ({ data }) => {
  return (
    <div className="container">
      <div className="row mt--20">
        <div className="col-lg-12">
          <ul className="brand-list brand-style-1-new">
            {data &&
              data.map((data, index) => (
                <li key={index}>
                  <Image
                    src={data}
                    width={"100%"}
                    height={"100%"}
                    priority={true}
                    alt="Brand Image"
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrandTwo;
