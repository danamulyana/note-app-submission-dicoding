import React from "react";
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import "../css/Note.css";

function NoteList({notes, type}){

    if(!notes.length){
        return <h4 className="NoResult">Tidak ada {type}</h4>
    }

    return(
        <div className="NoteList">
            {
                notes.map((note) => (
                    <NoteItem key={note.id} {...note} />
                ))
            }
        </div>
    )
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    type: PropTypes.string.isRequired
}

export default NoteList;