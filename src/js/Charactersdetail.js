import React from "react"
import { useParams } from "react-router-dom"
import { Context } from "./store/appContext"
import { useContext } from 'react'
import { useState } from "react"
const Charactersdetail=()=>{
    const { store, actions } = useContext(Context);
    const [properties,setProperties] = useState()
   let {id} = useParams()
   console.log(store.characters.results && store.characters.results[id])
   console.log(id)
   let url=store.characters.results && store.characters.results[id].url
   fetch(url&&url)
   .then(Response=>Response.json())
   .then(Result=>setProperties(Result.result.properties))
   console.log(properties)
   return <div className=" mb-3" style={{maxWidth:"1000px"}}>
    <div className="row">
      <div className="col">
        <img className= "img-fluid"src="https://picsum.photos/800/600"/>
        
      </div>
      
      <div className="col">
        <h5>{properties&&properties.name}</h5>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        
      </div>
    </div>
    <hr className="text-danger"></hr>
    
    <div className="col-md-8">
        <div className="card-body">
           
            <p className="card-text">
                
                <div
                    className="row g-2 g-lg-3 text-danger"
                    // style={{ position: "absolute", bottom: "0px" }}
                  >
                    <div className="col text-danger">
                      <div className="p-3 ">
                        <h6>Name</h6>
                        {properties&&properties.name}
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 ">
                        <h6>Gender</h6>
                        {properties&&properties.gender}
                      </div>
                    </div>
                    <div className="col">
                      <div className="p-3 ">
                        <h6>Height</h6>
                        {properties&&properties.height}
                        </div>
                      </div>
                      <div className="col">
                      <div className="p-3 ">
                        <h6>Skin color</h6>
                        {properties&&properties.skin_color}
              
                    </div>
                    </div>
                    <div className="col">
                      <div className="p-3">
                        <h6>Year</h6>
                        {properties&&properties.birth_year}
                      </div>
                      
                    </div> </div>
            </p>
        </div>
    </div>
   {/* <h3> {properties&&properties.gender}</h3>
    */}
    </div>
}
export default Charactersdetail