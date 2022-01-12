import React from "react";

const Showcase = (nasaData) => {
  console.log("showcase nasaData: ", nasaData);
  return (
    <>
      <div className="showcaseContainer">
        <h2>{nasaData.title}</h2>
        <p>{nasaData.date}</p>
        {/* <p>{nasaData.explanation}</p> */}

        <img src={nasaData.url} alt={nasaData.title}></img>
        <p>Copyright: {nasaData.copyright}</p>
      </div>
      <div className="showcaseButton">
        <button className="btn"></button>
      </div>
    </>
  );
};

export default Showcase;
