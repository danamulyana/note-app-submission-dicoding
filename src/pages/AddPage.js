import React from "react";
import '../css/AddPage.css';
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/local-data";
import { useNavigate } from 'react-router-dom';
 
function AddPage() {
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
        console.log(note)
        addNote(note);
        navigate('/');
    }

    return (
        <section className="AddPage">
            <h2>Add Note</h2>
            <NoteInput addNoteHandler={onAddNoteHandler} />
        </section>
    );
}

export default AddPage;