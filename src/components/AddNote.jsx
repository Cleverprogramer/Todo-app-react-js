import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AddNote = ({ Addnote, addnoteText, setaddnotetext, text }) => {
    const handleText = (e) => {
        if (characterlimit - e.length >= 0) {
            setaddnotetext(e);

        } else {
            toast.warning("your maximum is exceeded");
        }

    }
    const handleclick = () => {
        Addnote(addnoteText);
    }
    const characterlimit = 200
    return (
        <div className='note new'>
            <textarea value={addnoteText} onChange={(e) => handleText(e.target.value)} className='tt' placeholder='Type to add a note...' cols="10" rows="8"></textarea>
            <div className="note-footer">
                <small>{characterlimit - addnoteText.length} Remaining</small>
                <button className="save" onClick={handleclick}>Save</button>
            </div>
            <ToastContainer />
        </div>
    );
}

export default AddNote;
