import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
// import { Card2 } from "../componant/card2";
import { Card2 } from "../component/card2";
import { Cardp } from "../component/cardp";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    <>
    <h2 style={{color:"red"}}>Characters</h2>
      <div className=" mt-5 overflow-scroll d-flex gap-4">
        {store.characters.results &&
          store.characters.results.map((item,index) => {
            return <Card name={item.name}url={item.url} index={index} />;
            
          })}
      </div>
      <h2 style={{color:"red"}}>Vehicles</h2>
      <div className=" mt-5 overflow-scroll d-flex">
        {store.vehicles.results &&
          store.vehicles.results.map((item,index) => {
            return <Card2 name={item.name}url={item.url} index={index} />;
          })}
      </div>
     <h2 style={{color:"red"}}>Planets</h2>
	  <div className=" mt-5 overflow-scroll d-flex">
        {store.planets.results &&
          store.planets.results.map((item,index) => {
            return <Cardp name={item.name} url={item.url} index={index} />;
          })}
      </div>
    </>

  );
 
};
