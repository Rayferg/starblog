import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cardp = (props) => {
  const [properties,setProperties] = useState()
  fetch(props.url)
  .then(Response=>Response.json())
  .then(Result=>setProperties(Result.result.properties))
  const { store, actions } = useContext(Context);
  return (
    <div className="card col-1" style={{ width: "30rem" }}>
    <img src="..." className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text" >
        Climate: {properties&&properties.climate}
        <br></br>
        Diamter: {properties&&properties.diameter}
        <br></br>
       Gravity: {properties&&properties.gravity}


      </p>
      <div className="d-flex justify-content-between">
      <Link to={`/planets/${props.index}`} className="btn btn-outline-primary me-100">
      Learn more

      </Link>
      <button className="btn btn-outline-warning" onClick={()=>actions.addToFavorites(props.name)} ><i class="fa fa-heart" aria-hidden="true"></i></button>

      </div>
    
    </div>
  </div>
  );
};
