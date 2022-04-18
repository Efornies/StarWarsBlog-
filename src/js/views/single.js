import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const { uid } = useParams();
  
	 useEffect(() => {
	 actions.getSingleCharacter(uid);
	}, []);

	return (

	
		<div> {store.singlecharacter.gender} </div>
	)

}