import React from "react";
import "./story.scss";
import groom from "../../images/groom edited.png";
import bride from "../../images/bride-edited.png";

const Story = () => {
  return (
    <>
      <div className="story">
        <div className="heading">
          <h1>Story</h1>
        </div>
        <div className="groom">
          <div className="img">
            <img src={groom} alt="groom" />
          </div>
          <div className="about">
            <p>
              Introducing Jessan Jacob, a quality engineer hailing from the
              serene town of Adoor. Currently, he's making waves in the UK with
              his meticulous work ethic. Beyond his professional pursuits,
              Jessan finds solace in the strategic depths of chess and the
              rhythmic joy of singing and dancing.
            </p>
          </div>
        </div>

        <div className="bride">
          <div className="img">
            <img src={bride} alt="bride" />
          </div>
          <div className="about">
            <p>
              Meet Shruti Mary Mathew, based from Kottayam, currently delving
              into the realm of machine learning as an engineer in Hyderabad.
              When she's not busy unraveling complex algorithms, Shruti enjoys
              the swift movements of badminton and the tranquil escape found
              within the pages of a good book.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
