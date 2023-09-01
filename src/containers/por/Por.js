import React, {createRef, useContext} from "react";
import "./Por.scss";
import PorCard from "../../components/porCard/PorCard";
import {positionOfResponsibility} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function PositionsofResponsibility() {
  const {isDark} = useContext(StyleContext);
  if (positionOfResponsibility.display) {
    return (
      <div className="por-section" id="por">
        <h1 className="por-heading">Positions of Responsibility</h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle por-text-subtitle"
                : "subTitle por-text-subtitle"
            }
          >
            {positionOfResponsibility.subtitle}
          </p>
          <div className="por-card-container">
            {positionOfResponsibility.por.map((por, index) => (
              <PorCard key={index} por={por} isDark={isDark} />
            ))}
          </div>
      </div>
    );
  }
  return null;
}
