const { createContext, useReducer } = require("react");
const { reducer } = require("./reducer");
const initialState = { items: [], errors: { text: "" } };

const DataContext = createContext(initialState);

const TitleMap = new Map();
function ContextProvider({ children }) {
  console.log(reducer);
  const [state, dispatch] = useReducer(reducer, initialState);
  const EditTask = (id,data) => {
    dispatch({
      type:"EDIT_TASK",
      payload:{id,data}
    })
  };
  const DeleteTask=(id)=>{
    TitleMap.delete(id)
    dispatch({
      type:"DELETE_TASK",
      payload:id
    })
  }
  const AddTask = (data) => {
    if (TitleMap.has(data.title, 1)) {
      dispatch({
        type: "ADD_ERROR",
        payload: { text: "Title already exists" },
      });
    } else {
      TitleMap.set(data.title, 1);
      dispatch({
        type: "ADD_TASK",
        payload: { id:state.items.length-1, title: data.title, item: data.agenda },
      });
    }
  };

  const RemoveError = () => {
    dispatch({
      type: "CLEAR_ERROR",
    });
  };

  return (
    <DataContext.Provider
      value={{ items: state.items, AddTask, DeleteTask,RemoveError, errors: state.errors }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, ContextProvider };
