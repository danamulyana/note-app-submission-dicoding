import React from 'react';
import PropTypes from 'prop-types';
import "../css/InputNote.css";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNoteHandler(this.state);
  }

  render() {
   return (
     <form className='contact-form' onSubmit={this.onSubmitEventHandler}>
        <div className='contact-input'>
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        </div>
        <div className='contact-input'>
          <div className='contact-input__editable' data-placeholder="Body" contentEditable onInput={this.onBodyChangeEventHandler} />
        </div>
        <div className='contact-form__footer'>
          <button type="submit">Tambah</button>
        </div>
     </form>
   )
 }
}

NoteInput.propTypes = {
    addNoteHandler : PropTypes.func.isRequired,
}

export default NoteInput;
