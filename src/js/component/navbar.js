import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-5.png" alt="star wars logo" id="swLogo"/>
				<div className="dropdown show">
					<a
					className="btn btn-primary dropdown-toggle"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					>
					Favourites
					</a>
					<div className="dropdown-menu" aria-labelledby="dropdownFavourites">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>
			</div>
		</nav>
	);
};
