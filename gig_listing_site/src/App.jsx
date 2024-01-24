import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Gig from "./Gig"

const App = () => {
  const gigData = [
    {band: "Paramore", description: "Paramore is back for one night only!", date: "17/02/2023", time: "18:00", location: "Camden, London"},
    {band: "Fall Out Boy", description: "Last chance to get tickets!", date: "28/02/2023", time: "19:00", location: "Shoreditch, London"}
  ]
  return (
    <div>
      <h1> Welcome to Gig Listings!</h1>
      {gigData.map((gig,index) =>(
        <Gig key={index} {...gig}/>

      ))}
    </div>
  );
}

export default App;
