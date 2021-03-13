import React, { useContext } from "react";
import { DataContext } from "../../context/context";
import Alert from "../Alert/Alert";
import DisplayStyles from "./DisplayItem.module.css";
function DisplayItem(props) {
  const { items,errors,RemoveError,DeleteTask } = useContext(DataContext);


  function showError(){
    setTimeout(()=>{
      RemoveError()
    },1500)

    return (<Alert text={errors.text}></Alert>)

  }


  return (
    <div>
      {errors.text?showError():<></>}
      <ul className="collection">
        {items.map((item) => (
          <li
            className={`${DisplayStyles.items} collection-item avatar`}
            key={item.id}
          >
            <span>
              {" "}
              <img
                src={require("../../assets/user.png")}
                alt=""
                className="circle"
              />
              <span className="title">{item.title}</span>
              <p>{item.item}</p>
            </span>
            <span className={`${DisplayStyles.buttonWrapper} right`}>
              <button
                className={`${DisplayStyles.buttonSpace} btn waves-effect waves-light btn-small`}
              >
                {" "}
                Edit
              </button>
              <button
                className={`${DisplayStyles.buttonSpace} btn waves-effect waves-light btn-small`}
                onClick={()=>DeleteTask(item.id)}
              >
                {" "}
                Delete
              </button>
            </span>
          </li>
        ))}
        {items.length===0?<>GO On Add Some Tasks</>:""}
      </ul>
    </div>
  );
}

export default React.memo(DisplayItem);
