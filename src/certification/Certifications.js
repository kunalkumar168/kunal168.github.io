import React, {createRef, useContext} from "react";
import "./Certifications.scss";
import CertificationCard from "../../components/certificationsCard/CertificationCard";
import {certifications} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Certification() {
  const {isDark} = useContext(StyleContext);
  if (certifications.display) {
    return (
      <div className="certification-section" id="certification">
        <h1 className="certification-heading">Certifications</h1>
          <div className="certification-text-div">
                <p
                  className={
                    isDark
                      ? "dark-mode subTitle certification-text-subtitle"
                      : "subTitle certification-text-subtitle"
                  }
                >
                  {certifications.subtitle}
                </p>
          </div>
        <div className={ isDark
                      ? "dark-mode subTitle certification-text-subtitle"
                      : "subTitle certification-text-subtitle"} >
          {certifications.certification.map((certi, index) => (
            <CertificationCard key={index} certification={certi} isDark={isDark}/>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
