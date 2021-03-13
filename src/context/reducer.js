export  function reducer (state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {...state,items:[...state.items,action.payload]};
    case "ADD_ERROR":
      return {...state,errors:action.payload}
    case "CLEAR_ERROR":
      return {...state,errors:{text:""}}
    case "DELETE_TASK":
      return {...state,items:state.items.filter(item=>item.id!==action.payload)}
    case "EDIT_TASK":
      const {data,id}=action.payload
      
      return {...state,items:state.item}
      default:
      return state;
  }
}
