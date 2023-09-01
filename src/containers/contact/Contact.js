import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <div className="contact-normal">
                {contactInfo.location}
                  <br />
                  <br />
                {contactInfo.content}
              </div>
              {/* {contactInfo.location && (
                <>
                  <a
                    className="contact-detail"
                    href={"https://www.vecteezy.com/vector-art/552683-geo-location-pin-vector-icon" + contactInfo.location}
                  >
                    {contactInfo.location}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a> */}
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
              <img
                src={require("../../assets/images/kunal.png")}
                alt="Man working"
              ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
