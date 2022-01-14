import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Showcase from "./component/Showcase";
import "./css/style.scss";
import { LoadingSpinerComponent } from "./component/LoadingSpinerComponent";
import { trackPromise } from "react-promise-tracker";

// export const NasaContext = React.createContext();

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    trackPromise(
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
        )
        .then((res) => {
          setNasaData([res.data]);
        })
        .catch((err) => console.log(err))
    );
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
          <LoadingSpinerComponent />
        </div>
      </div>
      {/* </NasaContext.Provider> */}
    </>
  );
}

export default App;
