import React from "react";
import "../Card/Card.css";



const LKCard = props => (
  <div className="card" onClick={props.clickImage}>
    <div className="img-contanier">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)}/>
    </div>
  </div>
);


export default LKCard;
