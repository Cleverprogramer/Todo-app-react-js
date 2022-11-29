import React from 'react'
import { BiCheck, BiTrash, BiEditAlt } from "react-icons/bi";

const Note = ({ date, id, text, complete, note, handleDelete, update }) => {
    // TODO: add to the note when completed with this classs ➡➡➡ done ⬅⬅⬅

    return (
        <div className='note ' key={id}>
            <textarea className={`${note.complete && 'under'}`} cols="10" rows="8" value={text} disabled></textarea>
            <div className="note-footer">
                <small className='t-done'>{date}</small>
                <div className="icons-full">
                    {!note.complete && (
                        <>
                            <BiCheck onClick={() => complete(note)} className='icons-2' alt="" />
                            <BiEditAlt onClick={() => update(note)} className='icons' alt="" />
                        </>
                    )
                    }
                    <BiTrash onClick={() => handleDelete(id)} className='icons' alt="" />

                </div>
            </div>
        </div>
    )
}

export default Note
