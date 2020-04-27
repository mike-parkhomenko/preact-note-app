import Portal from '../../portals/Portal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import style from './popup.scss';

function Popup(props) {
  const { children, onCloseClick, show } = props;

  return (
    <Portal show={show}>
      <div class={style.popupWrapper}>
        <div class={style.popupWrapper__overlay} onClick={onCloseClick} />
        <div class={style.popup}>
          <div class={style.popup__header}>
            <i class={style.popup__closeBtn} onClick={onCloseClick}>
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </div>
          <div class={style.popup__body}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default Popup;
