import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Showcase from "./component/Showcase";
import Showcase1 from "./component/Showcase1";
import "./css/style.scss";

export const NasaContext = createContext();

function App() {
  const [nasaData, setNasaData] = useState([]);
  const api_key = process.env.NASA_API_KEY;

  useEffect(() => {
    axios
      .get(
        // `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
        // `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`
        `https://api.nasa.gov/planetary/apod?api_key=roZ3G8WaneZOOMjbLP1JFQoB8eL0Ya2dHBL9lRP8`
      )
      .then((res) => {
        setNasaData([res.data]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("nasaData: ", nasaData);
    console.log("nasaData[0]: ", nasaData[0]);
  }, [nasaData]);

  const handleLike = () => {};

  const nasaContextValue = {
    handleLike,
  };

  // {nasaData.map((data) => {
  //   <Showcase1
  //     copyright={data.copyright}
  //     date={data.date}
  //     title={data.title}
  //     desc={data.explanation}
  //     img={data.url}
  //   ></Showcase1>;
  // })}
  return (
    <>
      <NasaContext.Provider value={nasaContextValue}>
        <div className="appContainer">
          <h1>Soacestagram</h1>
          <p>Brought to you by NASA's image API</p>
          <div className="appContainer-showcaseCon">
            {/* here replacement - map */}
            <Showcase nasaData={nasaData[0]} />
            {/* here replacement - map */}
          </div>
        </div>
      </NasaContext.Provider>
    </>
  );
}

export default App;
