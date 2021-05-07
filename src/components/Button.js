import React from "react";

const Button = ({ text, icon, color, onClick }) => {
  let ClassName = "btn";
  if (color) {
    ClassName += ` btn-${color}`;
  }

  return (
    <button type="button" className={ClassName} onClick={onClick}>
      {text ? text : "button"}
      {icon ? <span className="material-icons">{icon}</span> : null}
    </button>
  );
};

export default Button;
