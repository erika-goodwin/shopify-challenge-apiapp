import React, { useContext, useState } from "react";
import { NasaContext } from "../App";

const Showcase = (props) => {
  const data = props.nasaData;
  //   console.log("showcase props: ", props);
  //   console.log("showcase nasaData: ", props.nasaData);
  //   const { handleLike } = useContext(NasaContext);

  const [liked, setLiked] = useState(false);

  return (
    <>
      <div className="showcaseContainer">
        <div className="showcaseContainer-title">
          <div>
            <h2>{data.title}</h2>
            <p>{data.date}</p>
          </div>

          <div className="showcaseButton">
            <button className="btn" onClick={() => setLiked(!liked)}>
              {liked ? "LIKED" : "LIKE"}
            </button>
          </div>
        </div>

        <img src={data.url} alt={data.title}></img>
        <p>Copyright: {data.copyright}</p>
      </div>
    </>
  );
};

export default Showcase;
