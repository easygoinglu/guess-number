const userNumbers = (state = [1, 100], action) => {
  switch (action.type){
    case "ADD_NUMBER": {
      let numbers = state.slice();
      numbers.push(action.inputNumber);
      return numbers.sort(function(a, b){return a - b;});
    }
    case "RESET_USER_NUMBERS":
      return [1, 100];
    default: 
      return state;
  }
}

export default userNumbers;