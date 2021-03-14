import React, { useContext, useEffect } from "react";
import M from "materialize-css";
import { DataContext } from "../../context/context";
function Modal(props) {
  const { AddTask, modalData, setModalData,editData ,isEditing,changeEditing} = useContext(DataContext);
   useEffect(() => {
    M.Modal.init(document.getElementById("modal1"));
  }, []);

  const submitForm = (event) => {
    event.preventDefault();
    if(isEditing){
      
      editData(modalData.id,modalData)
      changeEditing(false)
    }
    else 
      AddTask();
    setModalData({title:"",agenda:"",id:""})
   };
  return (
    <div>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Add items</h4>
          <p>Add any items</p>
          <form className="col s12 m12 l12 xl12" onSubmit={submitForm}>
            <div className="row">
              <div className="input-field col s12 m10">
                <input
                  required
                  id="input_text"
                  type="text"
                  data-length="10"
                  name="title"
                  value={modalData.title}
                  onChange={
                    (e) => setModalData({ ...modalData, title: e.target.value })
                    //setFormData({ ...formData, title: e.target.value })
                  }
                />
                <label htmlFor="input_text">Add Title</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12 m10">
                <input
                  required
                  id="input_text"
                  type="text"
                  name="item"
                  value={modalData.agenda}
                  onChange={
                    (e) =>
                      setModalData({ ...modalData, agenda: e.target.value })
                    // setFormData({ ...formData, agenda: e.target.value })
                  }
                />
                <label htmlFor="input_text">Add Agenda</label>
              </div>
            </div>
            <div className="modal-footer">
              {modalData.title.length > 1 && modalData.agenda.length > 1 ? (
                <button
                  type="submit"
                  className="modal-close waves-effect waves-green btn-flat"
                >
                  Add Item
                </button>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default React.memo( Modal);
