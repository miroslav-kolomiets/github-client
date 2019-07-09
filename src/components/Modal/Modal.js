import React from "react";
import ReactDOM from "react-dom";
import '../Modal/Modal.css';
import info from '../Modal/info.svg';
import close from '../Modal/close.svg';

const InnerModal = (props) => {
  return (
    <div className="modal-wrapper">
      <button className="close-button" onClick={props.closeModal}>
        <img src={close} alt="close button" />
      </button>
      <img src={info} alt="info" className="info"/>
      <div className="modal">
          Request failed.
      </div>
    </div>
  )
};

function Modal(props) {
  return ReactDOM.createPortal(
    <InnerModal 
      closeModal={props.closeModal}/>, 
      document.querySelector("#modal")
  );
}

export default Modal;
