import React from "react";
import ReactDOM from "react-dom";
import '../Modal/Modal.css';
import info from '../Modal/info.svg';


const JSX_MODAL = (
  <div className="modal-wrapper">
  <img src={info} alt="info" className="info"/>
    <div className="modal">
        Request failed.
    </div>
  </div>
);

function Modal(props) {
  return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"));
}

export default Modal;
