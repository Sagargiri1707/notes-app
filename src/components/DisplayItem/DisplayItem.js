import React, { Suspense, useContext } from "react";
import { DataContext } from "../../context/context";
import DisplayStyles from "./DisplayItem.module.css";
const Alert = React.lazy(() => import("../Alert/Alert"));
const Search = React.lazy(() => import("../Search/Search"));

function DisplayItem(props) {
  const {
    items,
    errors,
    RemoveError,
    DeleteTask,
    setModalData,
    changeEditing,
    searchData,
  } = useContext(DataContext);
  const image = require("../../assets/user.png");

  function showError() {
    setTimeout(() => {
      RemoveError();
    }, 1500);

    return (
      <Suspense fallback={<div>Loading</div>}>
        <Alert text={errors.text}></Alert>;
      </Suspense>
    );
  }
  const EditData = (id, data) => {
    changeEditing(true);
    setModalData(data);
  };

  return (
    <div>
      {errors.text ? showError() : <></>}
      <Suspense fallback={<div>Loading</div>}>
        <Search />
      </Suspense>
      <ul className="collection">
        {searchData.map((item) => (
          <li
            className={`${DisplayStyles.items} collection-item avatar`}
            key={item.id}
          >
            <span>
              {" "}
              <img src={image} alt="" className="circle" />
              <span className="title">{item.title}</span>
              <p>{item.agenda}</p>
            </span>
            <span className={`${DisplayStyles.buttonWrapper} right`}>
              <button
                data-target="modal1"
                onClick={() => EditData(item.id, item)}
                className={`${DisplayStyles.buttonSpace} modal-trigger btn waves-effect waves-light btn-small`}
              >
                {" "}
                Edit
              </button>
              <button
                className={`${DisplayStyles.buttonSpace} btn waves-effect waves-light btn-small`}
                onClick={() => DeleteTask(item.id)}
              >
                {" "}
                Delete
              </button>
            </span>
          </li>
        ))}
        {items.length === 0 ? <>GO On Add Some Tasks</> : ""}
      </ul>
    </div>
  );
}

export default React.memo(DisplayItem);
