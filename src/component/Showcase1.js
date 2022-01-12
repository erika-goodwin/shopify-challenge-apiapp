import React from "react";
import "../css/style.scss";

const Showcase1 = (props) => {
  const { copyright, date, title, desc, img } = props;

  console.log("showcase1: title", title);
  return (
    <>
      <div className="showcaseContainer">
        <h2>{title}</h2>
        <p>{date}</p>
        {/* <p>{explanation}</p> */}
        <img src={img} alt={title}></img>
        <p>Copyright: {copyright}</p>
      </div>
    </>
  );
};

export default Showcase1;
