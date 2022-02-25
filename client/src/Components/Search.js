import React, {useState} from 'react';

const Search = (props) => {

const [searching, setSearching] = useState('')
    const changeInput = (event) => {
        setSearching(event.target.value)
    }
    
    const clearing = () => {
        setSearching('')
    }

    const shouldDisplayX = searching.length > 0
    console.log(shouldDisplayX)

// New bits to review below:
const onSubmit = (event) => {
        event.preventDefault();
        props.search(searching);
        console.log('submitted')
}

    return ( 
        <div>
            <form id="searchProfiles" onSubmit={onSubmit}>
                <input id="term" type="text" value={searching} 
                    onChange={changeInput} placeholder="search here..." 
                    name="searchBar"/>
                <button type="submit">search</button> 
                {shouldDisplayX && <button onClick={clearing}>x</button>}
            </form>
        </div>
    )
}

export default Search;