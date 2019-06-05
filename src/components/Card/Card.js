import React from "react";
import "./Card.css";
// import "../../cards.json";
// import "../../App.js";



const Card = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="img-contanier">
      <img src={props.images} alt={props.name}/>
    </div>
  </div>
);

export default Card;
