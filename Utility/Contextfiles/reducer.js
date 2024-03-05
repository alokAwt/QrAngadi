function reducer(state, action) {
    switch (action.type) {
      case "SET_TOKEN":
          return{
            ...state,
            token:action.token}
      case "LOGOUT":
          return{
            ...state,
            token:null}

      default:
        return state;
    }
  }
  
  export default reducer;
  