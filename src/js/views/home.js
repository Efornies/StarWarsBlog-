import React, {useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext";
import { AiOutlineHeart } from '@react-icons/all-files/ai/AiOutlineHeart';
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const Home = () => {
	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getCharacters()
		
		}, []);

	return (

		<div className = "container-fluid py-2">
			<h1 className="title">Characters</h1>
			<div className = "d-flex flex-row flex-nowrap" >
			{store.characters.map((character) => {
				return <div key={character.uid} className="card text-white bg-dark mb-3" style={{width: "18rem"}}>
				        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..."/>
						<div className="card-body">
				  		<h5 className="card-title">{character.name}</h5>
				  		 <Link to = {"single/" + character.uid}> 
				 		 <button className="btn btn-warning" style={{marginRight:"90px"}}> More Info</button></Link>
						  <button href="#" className="btn btn-warning" onClick={() => {
										actions.addToFavs(character.name)
									}}> <AiOutlineHeart /> </button>
							
						</div>
			  		</div>
			})}
		</div>
		</div>
	)
};
