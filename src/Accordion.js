import React from "react";
import "./Accordion.css";
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setisActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setisActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
