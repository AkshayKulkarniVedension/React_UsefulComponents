import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <div className="btn" onClick={() => setIsActive(!isActive)}>
          {isActive ? (
            <AiOutlineMinus></AiOutlineMinus>
          ) : (
            <AiOutlinePlus></AiOutlinePlus>
          )}
        </div>
      </header>
      {isActive && <p>{info}</p>}
    </div>
  );
};

export default Question;
