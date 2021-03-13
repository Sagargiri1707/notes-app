export  function reducer (state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {...state,items:[...state.items,action.payload],searchData:[...state.items,action.payload],modalData:action.payload};
    case "ADD_ERROR":
      return {...state,errors:action.payload}
    case "CLEAR_ERROR":
      return {...state,errors:{text:""}}
    case "DELETE_TASK":
      return {...state,items:state.items.filter(item=>item.id!==action.payload)}
    case "MODAL_DATA":
      return {...state ,modalData:action.payload}
    case "EDIT_DATA":
      const elements=state.items.map(a=>a.id===action.payload.id ? action.payload.data:a)
       return {...state,items:elements,searchData:elements}
    case "IS_EDITING":
      return {...state,isEditing:action.payload}
      case "SET_SEARCH_QUERY":
        return {...state,searchQuery:action.payload,searchData:state.items.filter(a=>a.title.indexOf(action.payload)>-1||a.agenda.indexOf(action.payload)>-1)}
    default:
      return state;
  }
}
