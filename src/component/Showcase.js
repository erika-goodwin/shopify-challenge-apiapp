import React, { useContext, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";

const Showcase = (props) => {
  const data = props.nasaData;

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
              {liked ? <HiHeart /> : <HiOutlineHeart />}
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
