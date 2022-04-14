import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" style={{width: "100px", paddingLeft: "25px" }}/></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="nav-item dropdown-toggle btn btn-warning" style={{marginRight: "25px" }}>Favorites</button>
					
				</Link>
			</div>
		</nav>
	);
};
