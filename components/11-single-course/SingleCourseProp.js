import Image from "next/image";
import React from "react";
import CourseSlider from "./CourseSlider";

export default function SingleCourseProp({ data }) {
  console.log("data: ", data);
  return (
    <>
      <div className="col-lg-12">
        {/* {data.map((data, index) => ( */}
        <div className="modern-course-features-box-new h-100">
          <div className="inner">
            <div className="content">
              <h2 className="title" style={{ textAlign: "center", fontSize: "24px",fontWeight:"500", }}>
                {data?.content1?.title}
              </h2>
              {/* <p>{data?.content1?.desc}</p> */}
              <div className="row g-5">
                {data?.content1?.imgs?.map((list, i) => (
                  <div className="col-lg-4 col-6" style={{marginTop:"50px", display:"flex", justifyContent:"center"}} key={i}>
                    <Image
                      src={list}
                      width={"100%"}
                      height={"100%"}
                      alt="Icon Image"
                    />
                  </div>
                ))}
              </div>
            
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>

      {/* <div className="col-lg-6">
        <div className="modern-course-features-box-new one-colume-grid h-80">
          <div className="inner">
            <div className="thumbnail">
              <Image
                src={data?.content2?.img}
                width={558}
                height={397}
                alt="Image"
              />
            </div>
            <div className="content">
              <h2 className="title" style={{fontWeight:"600"}}>{data?.content2.title}</h2>
              <p>{data?.content2.desc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6" style={{border:'2px'}}>
        <div className="modern-course-features-box-new grid-content-reverse ">
          <div className="inner">
          <div className="h-20 w-full radius-20 thumbnail"><br></br>
              <Image
                src={data?.content3?.img}
                width={"100%"}
                height={"100%"}
                alt="Image"
              
              />
            </div>
            <div className="content">
              <h2 className="title" style={{fontWeight:"600", marginTop:"0px"}}>{data.content3.title}</h2>
              <p style={{marginBottom:"20px"}}>{data.content3.desc}</p>
              <ul className="rbt-list-style-2-new flex-wrap g-1 mb-40">
                {data.content3.subContent.map((innerData, i) => (
                  <li key={i} style={{display:"flex", alignItems:"center"}}>
                    <i className="feather-check"></i>
                    <p style={{fontSize:"14px"}}>{innerData.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
