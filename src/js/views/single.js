import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
  
	 useEffect(() => {
	 actions.getOneCharacter(theid);
	}, []);

}