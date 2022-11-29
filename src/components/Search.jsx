import React from 'react';
import { BiSearchAlt2 } from "react-icons/bi";

const Search = ({ searchText }) => {
    const handleSearch = (e) => {
        searchText(e)
    }
    return (
        <div className='search'>
            <BiSearchAlt2 alt="" className='search-icon' />
            <input onChange={(e) => handleSearch(e.target.value)} placeholder='Type to search...' />
        </div>
    );
}

export default Search;
