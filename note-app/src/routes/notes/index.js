import style from './notes.scss';
import { useState } from 'preact/hooks';
import { useNotes } from '../../context/notes';
import { v4 as uuid4 } from 'uuid';
import NoteItem from '../../components/noteItem';
import EditNotePortal from '../../portals/editNote';
import DeleteNotePortal from '../../portals/deleteNote';
import { normilizeObjById, isObjectEmpty } from '../../utils';

function Notes() {
  const [notes, setNotes] = useNotes();
  const [noteId, setNoteId] = useState(null);
  const [inputVal, setInputVal] = useState('');
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  function handleInput(e) {
    const { value } = e.target;
    setInputVal(value);
  }

  function handleAddClick(e) {
    e && e.preventDefault() && e.stopPropagation();

    if (!inputVal) {
      return null
    }

    const note = { content: inputVal, id: uuid4() };
    const normilizedNote = normilizeObjById(note);

    setNotes(normilizedNote);
    setInputVal('');
  }

  function editNote(id) {
    setNoteId(id);
    setShowEditPopup(!showEditPopup);
  }

  function deleteNote(id) {
    setNoteId(id);
    setShowDeletePopup(!showDeletePopup);
  }

  function renderNotes() {
    if (notes && !isObjectEmpty(notes)) {
      return (
        <ul class={style.notesList}>
          {Object.entries(notes).map(([id, note]) => {
            return (
              <NoteItem
                key={id}
                onEditClick={() => editNote(id)}
                onDeleteClick={() => deleteNote(id)}
                {...note}
              />
            )
          })}
        </ul>
      )
    }

    return null
  }

  return (
    <section class={style.notes}>
      {!isObjectEmpty(notes) && <h2 class={style.notes__title}>Your notes</h2>}

      {renderNotes()}

      {isObjectEmpty(notes) && <h2 class={style.notes__placeholder}>You don't have any notes</h2>}

      <div class={style.notes__footer}>
        <input
          class={`input ${style.notes__input}`}
          type="text"
          placeholder="Enter new note..."
          value={inputVal}
          onInput={handleInput}
        />
        <button class="button base" onClick={handleAddClick}>Add</button>
      </div>

      <EditNotePortal show={showEditPopup} id={noteId} setShowPopup={setShowEditPopup} />
      <DeleteNotePortal show={showDeletePopup} id={noteId} setShowPopup={setShowDeletePopup} />
    </section>
  )
}

export default Notes;
