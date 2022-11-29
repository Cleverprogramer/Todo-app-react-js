import React from 'react';
import AddNote from './AddNote';
import Note from './Note';

const NotesList = ({ notes, update, complete, searchText, Addnote, addnoteText, handleDelete, setaddnotetext }) => {
    return (
        <div className='notes-list'>
            {
                notes.filter((note) => note.text.toLowerCase().includes(searchText.trim().toLowerCase())).map((note) => (
                    <Note update={update} complete={complete} key={note.id} handleDelete={handleDelete} id={note.id} text={note.text} date={note.date} note={note} />
                ))
            }
            <AddNote Addnote={Addnote} setaddnotetext={setaddnotetext} addnoteText={addnoteText} />
        </div>
    );
}

export default NotesList;
