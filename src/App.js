import React, { Suspense } from "react";
import "materialize-css/dist/css/materialize.min.css";
const DisplayItem = React.lazy(() =>
  import("./components/DisplayItem/DisplayItem")
);
const AddItem = React.lazy(() => import("./components/AddItem/AddItem"));
function App(props) {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading </div>}>
        <DisplayItem />
      </Suspense>

      <Suspense fallback={<div>Loading </div>}>
        <AddItem />
      </Suspense>
    </div>
  );
}

export default React.memo(App);
