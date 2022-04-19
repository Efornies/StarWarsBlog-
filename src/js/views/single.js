import React, { useState, useEffect, useContext } from "react";
import "../../styles/single.css";
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
    <div className="cardsinglecharacter">
      <div className="card mb-3" style={{maxWidth:"540px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="http://ift.tt/1xkwB3n" className="img-fluid rounded-start"   />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{store.singlecharacter.name} </h5>
              <p >
                Gender:{store.singlecharacter.gender} 
              </p>
			  <p >
                Birth year:{store.singlecharacter.birth_year} 
              </p>
			  <p >
                Hair color:{store.singlecharacter.hair_color} 
              </p>
			   <p >
			  Height:{store.singlecharacter.height} 
              </p>
            
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
