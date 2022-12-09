import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Card = (props) => {
  const { store, actions } = useContext(Context);
  const [properties,setProperties] = useState()
  console.log(store.characters,"hello")
  console.log(props.url)
  
   fetch(props.url)
   .then(Response=>Response.json())
   .then(Result=>setProperties(Result.result.properties))
  return (
    
    <div className="card col-1" style={{ width: "30rem" }}>
      
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text" >
          Gender:{properties&&properties.gender}</p>
          
         <p>Skin-color:{properties&&properties.skin_color}</p> 
          
          <p>Height:{properties&&properties.height}</p>


     
        <div className="d-flex justify-content-between">
        <Link to={`/character/${props.index}`} className="btn btn-outline-primary me-100">
        Learn more

        </Link>
        <button className="btn btn-outline-warning" onClick={()=>actions.addToFavorites(props.name)} ><i class="fa fa-heart" aria-hidden="true"></i></button>

        </div>
      
      </div>
    </div>
  );
};
