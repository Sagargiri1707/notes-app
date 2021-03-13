import React, { useContext, useEffect, useState } from "react";
import M from "materialize-css";
import { DataContext } from "../../context/context";
function AddItem(props) {

  const {AddTask}=useContext(DataContext)
  const [formData,setFormData]=useState({
    title:"",
    agenda:""
  })
  useEffect(() => {
    M.Modal.init(document.getElementById("modal1"));
    M.FloatingActionButton.init(document.querySelectorAll(".fixed-action-btn"));
  }, []);

  const submitForm=(event)=>{
    event.preventDefault()
    AddTask(formData)
    setFormData({title:"",agenda:""})
  }
  return (
    <>
      <div className="fixed-action-btn">
        <button
          data-target="modal1"
          className="btn modal-trigger btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </button>
      </div>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Add items</h4>
          <p>Add any items</p>
          <form className="col s12 m12 l12 xl12" onSubmit={submitForm}>
        <div className="row">
          <div className="input-field col s12 m10">
            <input id="input_text" type="text" data-length="10" name="title" value={formData.title} onChange={(e)=>setFormData({...formData,title:e.target.value})} />
            <label htmlFor="input_text">Add Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m10" >
            <input id="input_text" type="text"  name="item"  value={formData.agenda} onChange={(e)=>setFormData({...formData,agenda:e.target.value})} />
            <label htmlFor="input_text">Add Agenda</label>
          </div>
        </div>
        <div className="modal-footer">
          <button type="submit" className="modal-close waves-effect waves-green btn-flat">
            Add Item
          </button>
        </div>
      </form>
        </div>
        
      </div>
    </>
  );
}

export default AddItem;
