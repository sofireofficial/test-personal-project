import React, { useState, useEffect } from "react";
import './App.css';
import Search from "./Components/Search";

// SERVICES THAT CALL OUR API ENDPOINTS
// BELOW COMMUNICATES WITH SERVER
import { getAllMatchmakers } from "./services/matchmakerService";
import { getAllUsers, getAllUsersByLocation } from "./services/userService";
import Title from "./Components/Title"
import LogoPic from "./Components/LogoPic";

function App() {

  // const [filter, setFilter] = useState('all');
  const [matchmakers, setMatchmakers] = useState(null);
  const [users, setUsers] = useState(null);

  async function getLocation(location) {
    const response = await getAllUsersByLocation(location)
    setUsers(response) //updating users' stae var from response from server 
  }


  useEffect(() => {
    async function getMatchmakers() {
      if (!matchmakers) {
        const response = await getAllMatchmakers();
        setMatchmakers(response);
      }
    }
    async function getUsers() {
      if (!users) {
        const response = await getAllUsers();
        setUsers(response)
      }
    }

    getMatchmakers(); //use elsewhere
    getUsers();
  }, [matchmakers]);

  const renderMatchmaker = (matchmaker) => { //returns JSX markup
    return (
      <li key={matchmaker._id}>
        <h3>
          {`${matchmaker.matchmaker_name.toUpperCase()}`} 
        </h3>
        <p>{`(${matchmaker.location} based)`}</p>
        <button style={{borderColor:"rgb(160, 7, 7)"}} onClick={() => getLocation(matchmaker.location)}>Singles</button>
      </li>
    );
  };


  return (
    <div>

      <div className="App-header">
        <Title />
      </div>

      <div className="App-header2">
        <LogoPic /> 
      </div>

      <div>
        <button style={{backgroundColor:"rgb(160, 7, 7)"}}>alllll users<br /></button>
        <Search />
        <br />
      </div>

    <div className="displayUsers">{users && users.length > 0 ? (
            <h2>{users.map((user) => { return `${user.first_name} ${user.last_name.toUpperCase()} `})}</h2>
) : (
          <p>No users found</p>
        )} 
      </div>
    {/* onClick={() => setFilter('London')  */}
    {/* onClick={users.map((user) => renderUser(user)} */}
   
   <div>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <p>scroll ↓</p>
      <ul className="matchmakers">
        {matchmakers && matchmakers.length > 0 ? (
          // profiles.filter((profile) => profile.team_name === 'Cupid' ).map((profile) => renderProfile(profile))
          matchmakers.map((matchmaker) => renderMatchmaker(matchmaker))
        ) : (
          <p>No Matchmakers found</p>
        )}      
      </ul>

      </div>

    </div>
  );
}

export default App;
