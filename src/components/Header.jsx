import React from 'react';
import { BiNote } from "react-icons/bi";
const Header = ({ }) => {
    return (
        <div className='header'>
            <h1 className='title'>Notes</h1>
            <BiNote className='note-icon' />
        </div>
    );
}

export default Header;
