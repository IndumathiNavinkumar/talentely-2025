import Image from "next/image";
import Link from "next/link";

import CourseDetails from "../../data/course-details/courseData.json";
import useCategoryCount from "@/context/useCategoryCount";

const CategoryOne = (props) => {
  const { data } = props;

  return (
    <>
      {data &&
        data.map((item, innerIndex) => {
          // const count = categoryCounts[item.category] || 0;
          return (
            <div className="col-lg-3 col-md-6 col-sm-6 col-6" key={innerIndex}>
              <Link className="rbt-cat-box rbt-cat-box-1 text-center" href={`${item?.linkURL}`} target="_blank">
                <div className="inner" style={{ margin:"20px 10px", padding:"60px 30px" }}>
                  <div>
                    <Image
                      src={item?.img}
                      width={200}
                      height={200}
                      priority
                      alt="Icons Images"
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default CategoryOne;
