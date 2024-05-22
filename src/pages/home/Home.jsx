import React from "react";
import "./home.scss";
import img1 from "../../images/first.png";
import img2 from "../../images/secondImg.jpg";
import CountDown from "./CountDown";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="firstimg">
          <div className="image">
            <img src={img1} alt="firstImg" />
          </div>
          <div className="content">
            <div className="name">
              <h1>
                S <span className="and">&</span> J
              </h1>
            </div>
            <div className="para">
              <h3>
                Welcome to the beginning of forever – where two hearts unite,
                and a beautiful journey of commitment unfolds. We invite you to
                join us in celebrating the holy matrimony of Shruti & Jessan, as
                they embark on their joyous adventure together.
              </h3>
            </div>
          </div>
        </div>
        <div className="secondimg">
          <div className="image">
            <img src={img2} alt="secondImg" />
          </div>
          <div className="countdown-container">
            <CountDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
