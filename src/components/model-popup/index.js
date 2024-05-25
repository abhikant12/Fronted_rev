import { useState } from "react";
import Modal from "./modal";
import "./style.css";


function ModalTest(){

  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup(){
    setShowModalPopup(!showModalPopup);
  }

  const header = (<h1> Customized Header </h1>);
  const footer = (<h1> Customized Footer </h1>);
  const body = (<div> Customized body </div>);
  
  return (
    <div>
      <button onClick = {() => handleToggleModalPopup()} > Open Modal Popup </button>
      {showModalPopup && ( <Modal id = {"custom-id"} onClose = {handleToggleModalPopup} header= {header}  footer = {footer} body = {body} /> )}
    </div>
  );
}


export default ModalTest;