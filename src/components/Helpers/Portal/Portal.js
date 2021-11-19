import ReactDOM from 'react-dom';

export default function Portal({ children, selector }) {
  return ReactDOM.createPortal(children, document.querySelector(selector));
}
