import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}
    <h3>Letterkenny Clicky Game</h3>
    <h4>Click on an image to earn a point, but don't click on the same image twice!  If you click all 12 images you win!!</h4>
    </div>
    
    <div className="scores">
      Score: {props.score}  
    </div>
  </div>
);
export default Header;