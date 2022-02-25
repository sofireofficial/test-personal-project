import React, { useState, useEffect } from "react";
import './App.css';
import Search from "./Components/Search";

// SERVICES THAT CALL OUR API ENDPOINTS / communicates with server
import { getAllMatchmakers } from "./services/matchmakerService";
import { getAllSingles, getAllSinglesByLocation } from "./services/singleService";
import Title from "./Components/Title"
import LogoPic from "./Components/LogoPic";
import Matchmaker from "./Components/Matchmaker";

function App() {

  // const [filter, setFilter] = useState('all');
  const [matchmakers, setMatchmakers] = useState(null);
  const [singles, setSingles] = useState(null);

  async function getLocation(location) {
    const response = await getAllSinglesByLocation(location)
    setSingles(response) //updating users' state var from response from server 
  }

  async function getAll() {
    const response = await getAllSingles()
    setSingles(response) //updating users' state var from response from server 
  }


  useEffect(() => { //like a side effect (once app.js renders)
    async function getMatchmakers() {
      if (!matchmakers) {
        const response = await getAllMatchmakers();
        setMatchmakers(response);
      }
    }
  
    getMatchmakers(); //(fetches matchmaker!!!!!!!!) use elsewhere
  }, [matchmakers]);    



  return (
    <div>
    <div className="container">
      
      <div className="App-header">
        <Title />
      </div>

      <div className="App-header2">
        <LogoPic /> 
      </div>

{/* Andy's help!! Whoop whoop*/}
<div>
    {singles != null ? (<div className="displaySingles">{singles.length > 0 ? (
            <div>
            <button onClick={ () => setSingles(null) } className="xButton">X</button>
              <ul>
              {singles.map((single) => { return <li>{single.first_name} {single.last_name.toUpperCase()}</li>})}</ul>
            </div>
) : (
          <p>🔍❤️</p>
        )} 
      </div>) : null}
</div>
  
    <div className="content">
      <div className="searchAll">
        <button
          onClick={ () => setSingles(getAll())}
          >
          All singles
        </button>
        <Search />
        <br />
      </div>

      <ul className="matchmakers">
        {matchmakers && matchmakers.length > 0 ? (
          matchmakers.map((matchmaker) => <Matchmaker matchmaker={matchmaker} getLocation={getLocation} />)
        ) : (
          <p>🔍❤️</p>
        )}      
      </ul>
      </div>

      <div className="copyright">
      <p>Ⓒ Sophia Johnson</p>
      </div>
    </div>
    </div>
  );
}

export default App;
