import { createPortal } from 'preact/compat';

function Portal({ children, show }) {
  return show ? createPortal(children, document.querySelector('body')) : null
}

export default Portal;
