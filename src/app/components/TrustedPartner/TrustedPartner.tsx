import React from 'react';
import './TrustedPartner.css';
import { FaEye, FaHandsHelping, FaBullseye, FaRocket } from 'react-icons/fa';
import TrustedPartnerImage from "../../assets/images/TrustedPartner.jpg";
import Image from 'next/image';

export default function TrustedPartner() {
  return (
    <div className="trusted-partner-container">
      <div className="trusted-header">
        <div className="header-text">
          <h1>Trusted Partner To Your Success And Growth</h1>
          <p>
            Codemultination has a global presence and takes pride in its ability to deliver effective and innovative solutions for businesses. It takes a meticulous approach and ensures the highest level of service and support to its clients. Our team of experts is committed to providing.
          </p>
        </div>
        <div className="header-image">
          <Image 
            src={TrustedPartnerImage} 
            alt="Trusted Partner Image"
            width={600}  // Specify width
            height={400} // Specify height
          />
        </div>
      </div>
      <div className="steps-section">
        <div className="steps-cards">
          <div className="step">
            <div className="step-Icon">
              <FaEye size={30} color="white" />
            </div>
            <h3>Vision to Reality</h3>
            <p>We leverage the latest technological trends to bring your vision to reality.</p>
          </div>
          <div className="step">
            <div className="step-Icon">
              <FaHandsHelping size={30} color="white" />
            </div>
            <h3>Dedicated Experts</h3>
            <p>Partner with our world-class team of technology experts to attain the highest level of service and support.</p>
          </div>
          <div className="step">
            <div className="step-Icon">
              <FaBullseye size={30} color="white" />
            </div>
            <h3>Process Driven</h3>
            <p>Ensuring consistency, precision, and transparency in our projects using an experienced process-driven approach.</p>
          </div>
          <div className="step">
            <div className="step-Icon">
              <FaRocket size={30} color="white" />
            </div>
            <h3>Digital Acceleration</h3>
            <p>Transforming the digital landscape for our clients by leveraging the latest technologies and innovative solutions.</p>
          </div>
        </div>
      </div>
      <div className="steps-section">
        <h2>Steps We Take To Make Your Project Successful</h2>
        <div className="steps-cards">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Understanding Client Goals</h3>
            <p>We align our design with the client's goals and vision through in-depth discussions and insights</p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <h3>Through Research & Analysis</h3>
            <p>We align our design with the client's goals and vision through in-depth discussions and insights</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <h3>Concept Development & Materials</h3>
            <p>We align our design with the client's goals and vision through in-depth discussions and insights</p>
          </div>
          <div className="step">
            <div className="step-number">04</div>
            <h3>Attention to Details & Quality Assurance</h3>
            <p>We align our design with the client's goals and vision through in-depth discussions and insights</p>
          </div>
          <div className="step">
            <div className="step-number">05</div>
            <h3>Timely Delivery & Client Satisfaction</h3>
            <p>We align our design with the client's goals and vision through in-depth discussions and insights</p>
          </div>
        </div>
      </div>
    </div>
  );
}
