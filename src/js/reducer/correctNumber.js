const correctNumber = (state = 1, action) => {
  switch(action.type){
    case "RECEIVE_NUMBER":
      return action.data;
    default:
      return state;
  }
}

export default correctNumber;