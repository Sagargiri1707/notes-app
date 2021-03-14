const { createContext, useReducer } = require("react");
const { reducer } = require("./reducer");
const initialState = {
  items: [],
  errors: { text: "" },
  isEditing: false,
  modalData: {
    title: "",
    id: "",
    agenda: "",
  },
  searchQuery: "",
  searchData: [],
};
const TitleMap = new Map();
const DataContext = createContext(initialState);

function ContextProvider({ children }) {
  console.log(reducer);
  const [state, dispatch] = useReducer(reducer, initialState);

  const DeleteTask = (id) => {
    var item = state.items.filter((a) => a.id === id);
    TitleMap.delete(item[0].title);

    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const AddTask = () => {
    if (TitleMap.has(state.modalData.title)) {
      dispatch({
        type: "ADD_ERROR",
        payload: { text: "Title already exists" },
      });
    } else {
      TitleMap.set(state.modalData.title, 1);

      dispatch({
        type: "ADD_TASK",
        payload: {
          id: state.items.length,
          title: state.modalData.title,
          agenda: state.modalData.agenda,
        },
      });
    }
  };

  const RemoveError = () => {
    dispatch({
      type: "CLEAR_ERROR",
    });
  };
  const setModalData = (data) => {
    dispatch({
      type: "MODAL_DATA",
      payload: data,
    });
  };
  const editData = (id, data) => {
    dispatch({
      type: "EDIT_DATA",
      payload: { id, data },
    });
  };
  function changeEditing(val) {
    dispatch({
      type: "IS_EDITING",
      payload: val,
    });
  }
  function setSearchQuery(data) {
    dispatch({
      type: "SET_SEARCH_QUERY",
      payload: data,
    });
  }
  return (
    <DataContext.Provider
      value={{
        items: state.items,
        DataToEdit: state.DataToEdit,
        modalData: state.modalData,
        searchData: state.searchData,
        searchQuery: state.searchQuery,
        isEditing: state.isEditing,
        errors: state.errors,
        setModalData,
        AddTask,
        DeleteTask,
        RemoveError,
        editData,
        changeEditing,
        setSearchQuery,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, ContextProvider };
