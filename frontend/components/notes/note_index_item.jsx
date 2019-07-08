import React from 'react';

const NoteIndexItem = ({ note, author, deleteNote }) => {
    function sliceIdx(str) {
        return str.indexOf("@");
    };

    return(
        <li className ='note-item'>
            <h3 className='note-title'>{note.title}</h3>
            <p className='note-body-segment'>{note.body}</p> 
            <p className='last-updated'>{note.updated_at.slice(0, 10)} ~ {author.slice(0, sliceIdx(author))}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
        </li>
    );
};

export default NoteIndexItem;