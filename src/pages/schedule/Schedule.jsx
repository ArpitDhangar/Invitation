import React from "react";
import "./schedule.scss";
import cardImage from "../../images/card image.jpg";
import cardImage2 from "../../images/card2.jpeg";
import image1 from "../../images/engagement.jpeg";
import image2 from "../../images/wedding.jpg";

const Schedule = () => {
  const openGoogleCalendar = () => {
    const calendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=20240704T053000Z/20240704T093000Z&text=Shruti%20%26%20Jessan%27s%20Engagement&location=Srinikethan+Auditorium%2C+Karukachal+Manimala+Rd%2C+Karukachal%2C+Kerala&allday=false`;
    window.open(calendarUrl, "_blank");
  };

  const openGoogelCalendar2 = () => {
    const calendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?dates=20240707T053000Z/20240707T093000Z&text=Shruti%20%26%20Jesson%27s%20Wedding&location=ST.%20Kuriakose%20Orthodox%20Valiapally%20Anandapally%20Kerala&allday=false`;
    window.open(calendarUrl, "_blank");
  };

  const openCard = () => {
    const card = cardImage;
    window.open(card, "_blank");
  };

  const openCard2 = () => {
    const card = cardImage2;
    window.open(card, "_blank");
  };

  return (
    <>
      <div className="schedule">
        <div className="heading">
          <h1>Schedule</h1>
        </div>
        <div className="cards">
          <div className="engagement">
            <div className="title">
              <h2>Engagement</h2>
            </div>
            <div className="line"></div>
            <div className="date">
              <h3 className="date"> 11:30 PM Thursday July 4, 2024</h3>
            </div>
            <div className="img">
              <a href="https://maps.app.goo.gl/URec5yXMXKEFDcV58">
                <img src={image1} alt="church" className="churchImg" />
              </a>
            </div>
            <div className="btn">
              <button className="addToCal" onClick={openGoogleCalendar}>
                Add To Cal
              </button>
              <button className="card" onClick={openCard}>
                Card
              </button>
            </div>
          </div>

          <div className="wedding">
            <div className="title">
              <h2>Wedding</h2>
            </div>
            <div className="line"></div>
            <div className="date">
              <h3 className="date"> 11:00 AM Thursday July 7, 2024</h3>
            </div>
            <div className="img">
              <a href="https://maps.app.goo.gl/URec5yXMXKEFDcV58">
                <img src={image2} alt="church" className="churchImg" />
              </a>
            </div>
            <div className="btn">
              <button
                className="addToCal"
                role="button"
                onClick={openGoogelCalendar2}
              >
                Add To Cal
              </button>
              <button className="card" onClick={openCard2}>
                Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
