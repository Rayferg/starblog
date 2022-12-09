import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favorites)
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            width="58px"
            src="https://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png"
          />
        </span>
      </Link>
      <div className="ml-auto">
	  <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
    <span className="badge text-bg-secondary bg-secondary">
      {store.favorites&&store.favorites.length}
    </span>
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
    {
      store.favorites&&store.favorites.map((item)=> <li><a class="dropdown-item" href="#">{item}<i class="fa fa-window-close" onClick={()=>actions.removeFromFavorites(item)} aria-hidden="true"></i></a></li>)
    }
    
  </ul>
</div>
      </div>
    </nav>
  );
};
