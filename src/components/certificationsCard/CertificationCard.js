import React, {createRef} from "react";
import {Fade, Slide} from "react-reveal";
import "./CertificationCard.scss";

export default function CertificationCard({certification, isDark}) {
  const imgRef = createRef();
  if (!certification.image)
    console.error(`Image of ${certification.name} is missing in certification section`);

  return (
    <div>
      <Fade left duration={1000}>
        <div className="certification-card">
          {certification.image && (
            <div className="certification-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="certification-roundedimg"
                src={certification.image}
                alt={certification.certificationName}
              />
            </div>
          )}
          <p>
            <h10 className="certification-text-certname">{certification.certificationName}</h10>
          </p>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="certification-card-border"></div>
      </Slide>
    </div>
  );
}
