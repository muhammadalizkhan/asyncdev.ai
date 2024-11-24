import React from "react";
import "./ScheduleCall.scss";
import Image from "next/image";
import ScheduleCallImageOne from "../assets/ScheduleCallImages/ScheduleCallImageOne.jpg";
import ScheduleCallImageTwo from "../assets/ScheduleCallImages/ScheduleCallImageTwo.jpg";
import ScheduleCallImageThree from "../assets/ScheduleCallImages/ScheduleCallImageThree.jpg";
import ScheduleCallImageFour from "../assets/ScheduleCallImages/ScheduleCallImageFour.jpg";

export default function ScheduleCall() {
  return (
    <div className="schedule-call">
      <div className="schedule-call-content">
        <h2 className="schedule-title">Schedule a free consultation with one of our experts.</h2>
        <p className="schedule-description">
          Take the first step towards a brighter future and supercharge your business with cutting-edge technologies,
          expert guidance, and unparalleled support.
        </p>
        <button className="schedule-button">Schedule Now</button>
      </div>
      <div className="schedule-call-images">
        <div className="image-wrapper">
          <Image src={ScheduleCallImageOne} alt="Consultation Image 1" className="schedule-image" />
        </div>
        <div className="image-wrapper">
          <Image src={ScheduleCallImageTwo} alt="Consultation Image 2" className="schedule-image" />
        </div>
        <div className="image-wrapper">
          <Image src={ScheduleCallImageThree} alt="Consultation Image 3" className="schedule-image" />
        </div>
        <div className="image-wrapper">
          <Image src={ScheduleCallImageFour} alt="Consultation Image 4" className="schedule-image" />
        </div>
      </div>
    </div>
  );
}
