import React from "react";
import "./Gig.css";
import Favourited from "./favourite";
import { useState, useEffect } from "react";

const Gig = ({gig}) =>{

    const [isFavourited, setIsFavourited] = useState(gig.favourited);
    // const [gigs, setGig] = useState([]);

    const handleFavouriteToggle = () => {
        setIsFavourited((prev) => !prev);
    }

    const { band_name, description, time, location, favourited } = gig;
    console.log('Is favourited:', isFavourited);

    return(
        <div className="main">
            <div key={gig.event_id}>
                <h3 className="Band_name">{band_name}</h3>
                <p>{description}</p>
                <p>Date: {new Date(time).toLocaleDateString()}</p>
                <p> Location: {location}</p>
        
        <Favourited 
        isFavourited={isFavourited} 
        onToggleFavourite={handleFavouriteToggle} 
        />
        </div>
        </div>
        );
}

    


export default Gig;