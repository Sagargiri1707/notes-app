import React, { useContext, useEffect, useState } from "react";
import M from "materialize-css";
import { DataContext } from "../../context/context";
import Modal from "../Modal/Modal";
function AddItem(props) {

  useEffect(() => {
     M.FloatingActionButton.init(document.querySelectorAll(".fixed-action-btn"));
  }, []);

  return (
    <>
      <div className="fixed-action-btn">
        <button
          data-target="modal1"
          className="btn modal-trigger btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </button>
        <Modal/>
      </div>
     
    </>
  );
}

export default AddItem;
