import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { StaticRouter } from "react-router-dom";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 ">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" style={{width: "100px", paddingLeft: "25px" }}/></span>
			</Link>
			< div className="dropdown me-5 ">
        <button
          className="btn btn-secondary dropdown-toggle btn btn-warning" 
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favourites 
            {store.favourites.length}

        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {store.favourites.map((items, index) => {
            return (
              <li key={index}>
                <div className="d-flex container">
                  <a className="dropdown-item" href="#">
                    {items}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};