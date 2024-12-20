import Image from "next/image";
import Link from "next/link";

import CourseDetails from "../../data/course-details/courseData.json";

const Card = ({ start, end, col, mt, isDesc, isUser,data }) => {

  return (
    <>
      {data &&
        data?.map((data, index) => (
          <div
            className={`${col} ${mt}`}
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            key={index}
          >
            <div className="rbt-card variation-01 rbt-hover">
              <div className="rbt-card-img">
                <Link href={`#`}>
                  <Image
                    src={data.logo}
                    width={355}
                    height={244}
                    alt="Card image"
                  />
                    <div className="rbt-badge-3 bg-white ">
                      <span>{data.discount}</span>
                      <span>Off</span>
                    </div>
                 
                </Link>
              </div>
              <div className="rbt-card-body">
               

                <ul className="rbt-meta">
                  <li>
                    <i className="feather-book"></i>
                    {data.lession} Lessons
                  </li>
                  <li>
                    <i className="feather-users"></i>
                    {data.students} Students
                  </li>
                </ul>
                <h4 className="rbt-card-title" style={{fontWeight:"normal"}}>
                  <Link href={`#`}>
                    {data.title}
                  </Link>
                </h4>
               
                {data?.desc ? <p className="rbt-card-text" style={{fontSize:"16px"}}>{data.desc}</p> : ""}
                <div className="rbt-card-top">
                  <div className="rbt-review">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <span className="rating-count">
                      ({data.review} Reviews)
                    </span>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;
