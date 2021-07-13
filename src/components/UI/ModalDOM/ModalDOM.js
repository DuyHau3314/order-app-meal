import ReactDOM from "react-dom";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";
import React from "react";

const portalElement = document.getElementById("modal");

const ModalDOM = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<Modal />, portalElement)}
    </div>
  );
};

export default ModalDOM;
