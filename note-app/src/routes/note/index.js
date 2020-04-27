import { useNote } from '../../context/notes';
import style from './note.scss'

function Note(props) {
  const { id } = props;
  const { content } = useNote(id)

  return (
    <section class={style.notePage}>
      <div class="note">{content}</div>
    </section>
  );
}

export default Note;
