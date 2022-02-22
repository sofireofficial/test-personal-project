import React from 'react';
// this tells how to render matchmaker. how it will look!

const Matchmaker = ({matchmaker, getLocation}) => {
    return (
              <li className="tester" key={matchmaker._id}>
                <h3>
                  {`${matchmaker.matchmaker_name.toUpperCase()}`} 
                </h3>
                <p>{`(${matchmaker.location} based)`}</p>
                <button style={{borderColor:"rgb(160, 7, 7)"}} onClick={() => getLocation(matchmaker.location)}>Singles</button>
              </li>
    )
}
export default Matchmaker;

// extracting a component ^
// refactored (changed code without changing behaviour)