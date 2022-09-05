import React from "react";
import '../css/AddPage.css';
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/network-data";
import { useNavigate } from 'react-router-dom';
import { AddPageLang } from '../utils/language';
import LocaleContext from "../context/LocaleContext";
 
function AddPage() {
    const navigate = useNavigate();
    const { lang } = React.useContext(LocaleContext);

    function onAddNoteHandler(note) {
        addNote(note);
        navigate('/');
    }

    return (
        <section className="AddPage">
            <h2 className="heading">{AddPageLang[lang].heading}</h2>
            <NoteInput addNoteHandler={onAddNoteHandler} placeholder={AddPageLang} lang={lang} />
        </section>
    );
}

export default AddPage;