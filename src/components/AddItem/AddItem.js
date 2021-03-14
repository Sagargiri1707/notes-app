import React, { Suspense, useContext, useEffect, useState } from "react";
import M from "materialize-css";
const Modal=React.lazy(()=>import("../Modal/Modal"));
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
        <Suspense fallback={<div>loading</div>}>
        <Modal/></Suspense>
      </div>
     
    </>
  );
}

export default React.memo(AddItem);
