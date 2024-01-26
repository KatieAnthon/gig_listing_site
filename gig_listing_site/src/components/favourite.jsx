import React from "react";
import { useState } from "react";


const Favourited = ({isFavourited, onToggleFavourite }) => {
    const enableFavourite = () => {
        onToggleFavourite(!isFavourited);
    };

    return (
        <div>
            <button onClick={enableFavourite} data-testid="Favourite-button">
                {isFavourited ? "❤️ Favourited": "♡"}
                </button>
        </div>
    );

};

export default Favourited;