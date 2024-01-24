import React from "react";
import "./Gig.css";

const Gig = (props) =>{
    return(
        <div className="main">
        <h3 className="Band_name" >{props.band}</h3>
        
        <img className="Image" data-testid="Image1 "src="./src/Paramore.jpg" alt="Band Performance" />
    
            <p className="description" data-testid="custom1">{props.description}</p>
            <p className="date_and_time" data-testid="custom2"> {props.date} at {props.time}</p>
            <p className="location" data-testid="custom3">{props.location}</p>
        </div>
    );
};

export default Gig;