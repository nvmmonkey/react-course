import { React, useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { set } from "mongoose";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h1>{props.title}</h1>
      <div className="actions">
        <span>{props.content}</span>
        <button className="btn" onClick={deleteHandler}>
          Deleted
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
