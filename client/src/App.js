import React, { useState, useEffect } from "react";
import './App.css';
import Search from "./Components/Search";

// SERVICES THAT CALL OUR API ENDPOINTS
// BELOW COMMUNICATES WITH SERVER
import { getAllMatchmakers } from "./services/matchmakerService";
import { getAllUsersByLocation } from "./services/userService";
import Title from "./Components/Title"
import LogoPic from "./Components/LogoPic";
import Matchmaker from "./Components/Matchmaker";

function App() {

  // const [filter, setFilter] = useState('all');
  const [matchmakers, setMatchmakers] = useState(null);
  const [users, setUsers] = useState(null);

  async function getLocation(location) {
    const response = await getAllUsersByLocation(location)
    setUsers(response) //updating users' stae var from response from server 
  }


  useEffect(() => { //see as a side effect (once app.js renders)
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

      <div className="button">
        <button style={{backgroundColor:"rgb(160, 7, 7)"}}>alllll users<br /></button>
        <Search />
        <br />
      </div>

{/* Andy's help!! Whoop whoop*/}
    {users != null ? (<div className="displayUsers">{users.length > 0 ? (
            <ul>{users.map((user) => { return <li>{user.first_name} {user.last_name.toUpperCase()}</li>})}</ul>
) : (
          <p>No users found</p>
        )} 
      </div>) : null}
    
    {/* onClick={() => setFilter('London')  */}
    {/* onClick={users.map((user) => renderUser(user)} */}
  
    <div>
      <ul className="matchmakers">
        {matchmakers && matchmakers.length > 0 ? (
          // profiles.filter((profile) => profile.team_name === 'Cupid' ).map((profile) => renderProfile(profile))
          matchmakers.map((matchmaker) => <Matchmaker matchmaker={matchmaker} getLocation={getLocation} />)
        ) : (
          <p>No Matchmakers found</p>
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
