import React from "react";
import "./PorCard.scss";

export default function PorCard({por, isDark}) {

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={ isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
            <br />
            <br />
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "dark-mode por-text-bullets" : "por-text-bullets"}>
      <ul>
        <GetDescBullets descBullets={por.descBullets} isDark={isDark} />
      </ul>
    </div>
  );
}
