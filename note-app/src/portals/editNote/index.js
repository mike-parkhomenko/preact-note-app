import { useNotes, useNote } from '../../context/notes';
import { useState, useEffect } from 'preact/hooks';
import Popup from '../../components/popup';

function EditNotePortal(props) {
  const { id, show, setShowPopup } = props;
  const [inputVal, setInputVal] = useState('');
  const editNote = useNotes()[3];
  const note = useNote(id);

  useEffect(() => {
    if (note) {
      setInputVal(note.content);
      () => setInputVal('');
    }
  }, [note]);

  function handleInput(e) {
    const { value } = e.target;
    setInputVal(value);
  }

  function handleAcceptClick() {
    if (inputVal.length) {
      editNote(id, inputVal);
    }
    setShowPopup(false);
  }

  function handleCancelClick() {
    setShowPopup(false);
  }

  return (
    <Popup onCloseClick={handleCancelClick} show={show}>
      <div class="popup-inner">
        <h3 class="popup-inner__title">Edit your note</h3>
        <input class="popup-inner__input input" type="text" value={inputVal} onInput={handleInput} />
        <div class="popup-inner__btns-wrapper">
          <button class="button primary" onClick={handleAcceptClick}>Apply</button>
          <button class="button base" onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
    </Popup>
  )
}

export default EditNotePortal;
