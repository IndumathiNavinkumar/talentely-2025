import Link from "next/link";
import Separator from "../Common/Separator";

const CopyRight = () => {
  return (
    <>
      <Separator />
      <div className="copyright-area copyright-style-1 ptb--20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <p className="rbt-link-hover text-center text-lg-start">
                Copyright © 2024 <sapn>Talentely</sapn>. Concept by{" "}
                <Link
                  href="https://irepute.in/"
                  target="_blank"
                  style={{ color: "#26377a", fontWeight: "normal" }}
                >
                  repute
                </Link>
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
              
                <li>
                  <Link href="https://lms.talentely.com/login" target="_blank">Student Login</Link> |
                </li>
                <li>
                  <Link href="https://lms.talentely.com/login" target="_blank">Recruiter Login</Link> |
                </li>
                <li>
                  <Link href="https://lms.talentely.com/login" target="_blank">Interviewer Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyRight;
