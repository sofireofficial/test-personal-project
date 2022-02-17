import React, { useState, useEffect } from "react";
import './App.css';
import Search from "./Components/Search";

// SERVICES THAT CALL OUR API ENDPOINTS
// BELOW COMMUNICATES WITH SERVER
import { getAllProfiles } from "./services/profileService";
import { getAllUsers, getAllUsersByLocation } from "./services/userService";

function App() {

  // const [filter, setFilter] = useState('all');
  const [profiles, setProfiles] = useState(null);
  const [users, setUsers] = useState(null);

  async function getLocation(location) {
    const response = await getAllUsersByLocation(location)
    setUsers(response) //updating users' stae var from response from server 
  }


  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }
    async function getUsers() {
      if (!users) {
        const response = await getAllUsers();
        setUsers(response)
      }
    }

    getProfiles(); //use elsewhere
    getUsers();
  }, [profiles]);

  const renderProfile = (user) => { //returns JSX markup
    return (
      <li key={user._id}>
        <h3>
          {`${user.team_name}`} 
        </h3>
        <p>TEAM {user.location.toUpperCase()}</p>
        <button onClick={() => getLocation(user.location)}>Explore</button>
      </li>
    );
  };


  return (
    <div>
    <Search />
    <button style={{backgroundColor:"rgb(160, 7, 7)"}}>all users</button>
    {users && users.length > 0 ? (
            <h2>{users.map((user) => { return user.first_name + " " + user.last_name})}</h2>
) : (
          <p>No users found</p>
        )}   
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
