import React, {PropTypes} from "react";

const NumberResult = ({userCurrentRange}) => (
  <div>
    {userCurrentRange.isCorrect? "Congradulation! You're right!" : "Current Range: " + userCurrentRange.smallNumber + "~" + userCurrentRange.bigNumber}
  </div>
);

NumberResult.propTypes = {
  userCurrentRange: PropTypes.object.isRequired
};

export default NumberResult;