import { Link } from 'preact-router/match';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import style from './noteItem.scss';

function Note(props) {
  const { content, id, onEditClick, onDeleteClick } = props;

  return (
    <li class={style.noteItem}>
      <Link class={style.noteItem__link} href={`/notes/${id}`}>
        <p>{content}</p>
      </Link>
      <div class={style.noteItem__right}>
        <i class={style.noteItem__icon} onClick={onEditClick}>
          <FontAwesomeIcon icon={faEdit} />
        </i>
        <i class={style.noteItem__icon} onClick={onDeleteClick}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </i>
      </div>
    </li>
  )
}

export default Note;
