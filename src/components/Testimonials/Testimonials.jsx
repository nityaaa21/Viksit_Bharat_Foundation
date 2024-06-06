import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX( ${tx}% )`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX( ${tx}% )`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Ashish Mishra</h3>
                  <span>Lucknow, India</span>
                </div>
              </div>
              <p>
                {" "}
                Our campaign 'Tayyari Kal Ki' aims at Training & Up Skilling the youth between the age of 18-32 years for employment and empowering them with a secure livelihood.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Nitya Gautam</h3>
                  <span>Agar, India</span>
                </div>
              </div>
              <p>
                {" "}
                Viksit Bharat Foundation, through its 'Shiksha Na Ruke' initiative, has been helping children from difficult circumstances get back to school and restart their lives.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Anshul Garg</h3>
                  <span>Kanpur, India</span>
                </div>
              </div>
              <p>
                {" "}
                Realising the need for accessible and quality healthcare for all. our campaign "Health Cannot Wait aims at providing people from the under-privileged sections
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Deepak Sharma</h3>
                  <span>Assam, India</span>
                </div>
              </div>
              <p>
                {" "}
                We use post disaster recovery programming to increase the resilience of buildings and communities to future hazards and raise awareness about disaster management.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
