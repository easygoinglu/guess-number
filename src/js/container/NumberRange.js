import {connect} from "react-redux";
import NumberResult from "../component/NumberResult";

const getCurrentNumberRange = (userNumbers, correctNumber) =>{
  if(userNumbers.indexOf(correctNumber) != -1){
    return {isCorrect: true};
  }else{
    let userCurrentRange = {smallNumber: 1, bigNumber: 100};

    for(let userNumber of userNumbers){
      if(userNumber < correctNumber){
        userCurrentRange.smallNumber = userNumber;
      }else{
        userCurrentRange.bigNumber = userNumber;
        break;
      }
    }

    return {isCorrect: false, ...userCurrentRange};
  }
};

const mapStateToProps = (state) => ({
  userCurrentRange: getCurrentNumberRange(state.userNumbers, state.correctNumber)
});

const NumberRange = connect(mapStateToProps)(NumberResult);

export default NumberRange;