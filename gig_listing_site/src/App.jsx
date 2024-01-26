import "./App.css";
import Gig from "./components/Gig"
import Favourited from "./components/favourite"
import React, { useState, useEffect } from "react";
import { createSpinner } from '@syncfusion/ej2-popups';
import { showSpinner, hideSpinner } from '@syncfusion/ej2-popups';

const App = () => {

  const [gigs, setGigs] = useState([]);
  const [favouriteGigs, setFavouriteGigs] = useState([])

  useEffect(() => {

    const container = document.getElementById("container")

    const componentLoading = () => {
      // create spinner
      createSpinner({
        target: container,
      });
      showSpinner(container);
    };

    componentLoading();

    const URL = `https://makers-gig-backend.onrender.com/events`;

    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      hideSpinner(container)
      setGigs(data)})
  }, []);

  const handleFavouriteToggle = (id) => {
    const updatedGigs = gigs.map((g) =>
    g.event_id === id ? {...g, favourited: !g.favourited} : g
    );

    setGigs(updatedGigs);

    const isFavourited = favouriteGigs.includes(id);

    if (isFavourited) {
      setFavouriteGigs((prev) => prev.filter((favId) => favId !== id))
    } else {
      setFavouriteGigs((prev) => [...prev, id])
    }
  };
  // create a new function which looks at gigs next to each other to determine if it should
  // be place in front or not
  const sortedGigsByFavourited = (a, b) =>{
    const isAFavourited = a.favourited || favouriteGigs.includes(a.event_id);
    const isBFavourited = b.favourited || favouriteGigs.includes(b.event_id);
    
    if (isAFavourited && !isBFavourited) return -1;
    if (!isAFavourited && isBFavourited) return 1;

    return 0;
  }

  const sortedGigData = gigs.sort(sortedGigsByFavourited);

  return (
    <div>
      <h1> Welcome to Gig Listings!</h1>
        <div id="container" className="spinner-target"></div>
      {sortedGigData.map((gig)=> (
        <Gig
        key={gig.event_id}
        gig={gig}
        isFavourited={favouriteGigs.includes(gig.event_id)}
        handleFavouriteToggle={() => handleFavouriteToggle(gig.event_id)}
        />
      ))}
      </div>
  );
      }

export default App;
