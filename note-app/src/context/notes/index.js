import { createContext } from 'preact';
import { useState, useContext } from 'preact/hooks';
import useSessionStorage from '../../hooks/useSessionStorage';

const NotesContext = createContext(null);

function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('No context defined for notes');
  }
  return context;
}

function useNote(id) {
  const [notes] = useNotes();
  return notes[id];
}

function NotesProvider(props) {
  const [getStoredNotes, setStoredNotes] = useSessionStorage('notes', null);
  const [notes, setNotes] = useState(getStoredNotes());

  function setNotesData(data) {
    setNotes({ ...notes, ...data });
    setStoredNotes({ ...notes, ...data });
  }

  function removeNote(id) {
    const modifiedNotes = { ...notes };
    delete modifiedNotes[id];

    setNotes({ ...modifiedNotes });
    setStoredNotes({ ...modifiedNotes });
  }

  function editNote(id, content) {
    const modifiedNotes = { ...notes };
    modifiedNotes[id].content = content;

    setNotes({ ...modifiedNotes });
    setStoredNotes({ ...modifiedNotes });
  }

  const value = [notes, setNotesData, removeNote, editNote];

  return <NotesContext.Provider value={value} {...props} />
}

export { useNotes, useNote, NotesProvider };
