import { useNotes } from '../../context/notes';
import Popup from '../../components/popup';

function DeleteNotePortal(props) {
  const { id, show, setShowPopup } = props;
  const removeNote = useNotes()[2];

  function handleAcceptClick() {
    removeNote(id);
    setShowPopup(false);
  }

  function handleCancelClick() {
    setShowPopup(false);
  }

  return (
    <Popup onCloseClick={handleCancelClick} show={show}>
      <div class="popup-inner">
        <h3 class="popup-inner__title">Are you sure you want to delete note?</h3>
        <div class="popup-inner__btns-wrapper">
          <button class="button primary" onClick={handleAcceptClick}>Yes</button>
          <button class="button base" onClick={handleCancelClick}>No</button>
        </div>
      </div>
    </Popup>
  )
}

export default DeleteNotePortal;
