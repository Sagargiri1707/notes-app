import React from "react";
import AlertCss from "./Alert.module.css";
function Alert({ text }) {
  return (
    <div>
      <div
        class={`${AlertCss.msg} ${AlertCss.msgError} z-depth-3 scale-transition`}
      >
        {" "}
        {text}{" "}
      </div>
    </div>
  );
}

export default React.memo(Alert);
