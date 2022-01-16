import axios from "axios";
import React, { useEffect, useState } from "react";
import Showcase from "./component/Showcase";
import "./css/style.scss";
import { LoadingSpinerComponent } from "./component/LoadingSpinerComponent";
import { trackPromise } from "react-promise-tracker";

function App() {
  const [nasaData, setNasaData] = useState([]);

//    let array = ["one", "two", "three", {}, [0, 1, 2]];

//    let firstEntry = array[1]; // two
//    console.log(array); // [ 0: "one" 1: "two"];

// //Q1            0       1
//   // array = [{...}, {...}];
//    //array.map((element, idx) => <Pokemon key='' data={data}>position is {idx}</Pokemon>)
//    // array = [<h1></h1>, <h1></h1>]
//    array.map

// //Q2
// // api to retrieve pokemons, and save in state
// const [pokemons, setPokemons] = useState({});

// setPokemons(prev => {}
//   ...prev,
//   res.data // array of pokemons 
// ])
// pokemons = [
//   {
//     name: "pokemon1",
//     age: 5
//   },
//   {
//     name: "pokemon2",
//     age: 10
//   }
// ]

// setPokemons(function(prev){
//   prev // [{}, {}, ...]

//   let updatedPokemons = prev;
//   updatedPokemons[1].age = 11;

//   return updatedPokemons;
// }) ; 

// setPokemons(prev => [
//   {}
  
// ])


//   //state=[{object1: 123}]
//   // setState[ 
//   //   ...per,
//   //   {...preObj, NEWONE}
//   // ]


//    let object = {
//      key1: "value1",
//      // something: [8, 1, 2],
//      someKey: "two",
//      something: [8, 1, 2],
//      pokemon: {...}
//    };
//    let element = object["key1"];


   











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

  return (
    <>
      <div className="appContainer">
        <nav className="appContainer-nav">
          <a href="/" className="appContainer-nav-title">
            <h1>Soacestagram</h1>
          </a>
          <p>Brought to you by NASA's image API</p>
        </nav>

        <div className="appContainer-showcaseCon">
          {nasaData.map((data, idx) => (
            <Showcase key={idx} nasaData={data} />
            // <Showcase nasaData={data} />
          ))}
          <LoadingSpinerComponent />
        </div>
      </div>
    </>
  );
}

export default App;
