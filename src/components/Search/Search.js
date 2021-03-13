import React, { useContext } from 'react';
import { DataContext } from '../../context/context';

function Search(props) {
    const {setSearchQuery,searchQuery} =useContext(DataContext)
    return (
        <div style={{display:'flex',alignItems:'center'}}> <span class="material-icons">
        search
        </span>
            <input type="search" placeholder="search for tasks" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
        </div>
    );
}

export default Search;