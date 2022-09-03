import React from 'react';
import PropTypes from 'prop-types';
import "../css/InputNote.css";
import useInput from '../hooks/useInput';

function NoteInput({addNoteHandler, placeholder, lang}){

  const [title,handleTitle] = useInput('');
  const [body,setBody] = React.useState('');

  const onSubmitEventHandler = (event) =>  {
    event.preventDefault();

    if(!title){
      const message = lang === 'id' ? 'Judul Catatan Harus di isi' : 'Note Title Required';
      return alert(message)
    }

    if(!body){
      const message = lang === 'id' ? 'Isi Catatan Harus di isi' : 'Note Contents Required';
      return alert(message)
    }

    addNoteHandler({title,body});
  }

  const HandlerBodyInput = (event) => {
    setBody(event.target.innerHTML);
  }

  return (
    <form className='contact-form' onSubmit={onSubmitEventHandler}>
       <div className='contact-input'>
         <input type="text" placeholder={placeholder[lang].name} value={title} onChange={handleTitle} />
       </div>
       <div className='contact-input'>
         <div className='contact-input__editable' data-placeholder={placeholder[lang].body} contentEditable onInput={HandlerBodyInput} />
       </div>
       <div className='contact-form__footer'>
         <button type="submit">{placeholder[lang].button}</button>
       </div>
    </form>
  )
}

NoteInput.propTypes = {
    addNoteHandler : PropTypes.func.isRequired,
    placeholder: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired
}

export default NoteInput;
