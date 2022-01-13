import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Showcase from "./component/Showcase";
import "./css/style.scss";

// export const NasaContext = React.createContext();

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
        // `https://api.nasa.gov/planetary/apod?api_key=roZ3G8WaneZOOMjbLP1JFQoB8eL0Ya2dHBL9lRP8`
      )
      .then((res) => {
        setNasaData([res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // console.log("nasaData: ", nasaData);
    // console.log("nasaData[0]: ", nasaData[0]);
  }, [nasaData]);

  // const nasaContextValue = {
  //   handleLike,
  // };

  return (
    <>
      {/* <NasaContext.Provider value={nasaContextValue}> */}
      <div className="appContainer">
        <nav className="appContainer-nav">
          <h1>Soacestagram</h1>
          <p>Brought to you by NASA's image API</p>
        </nav>

        <div className="appContainer-showcaseCon">
          {nasaData.map((data, idx) => (
            <Showcase key={idx} nasaData={data} />
          ))}
        </div>
      </div>
      {/* </NasaContext.Provider> */}
    </>
  );
}

export default App;
