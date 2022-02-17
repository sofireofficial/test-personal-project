import React, { useState, useEffect } from "react";
import './App.css';
import Search from "./Components/Search";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";
        // import { getAllUsers } from "./services/userService";

function App() {

  // const [filter, setFilter] = useState('all');
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);

  const renderProfile = (user) => {
    return (
      <li key={user._id}>
        <h3>
          {`${user.team_name}`} 
        </h3>
        <p>TEAM {user.location.toUpperCase()}</p>
        <button>Explore</button>
      </li>
    );
  };


  return (
    <div>
    <Search />
    <button style={{backgroundColor:"rgb(160, 7, 7)"}}>all users</button>
    {/* onClick={() => setFilter('London')  */}
    {/* onClick={users.map((user) => renderUser(user)} */}
    <div className="App-header">
        <h1>Matchmaker <br />Hub</h1>        

    </div>
      <ul className="profiles">
        {profiles && profiles.length > 0 ? (
          // profiles.filter((profile) => profile.team_name === 'Cupid' ).map((profile) => renderProfile(profile))
          profiles.map((profile) => renderProfile(profile))
        ) : (
          <p>No profiles found</p>
        )}      
      </ul>
    </div>
  );
}

export default App;
