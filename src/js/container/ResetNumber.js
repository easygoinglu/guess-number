import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {fetchNumber} from "../action";

let ResetNumber = ({dispatch}) => {
  return (
    <input type="button" name="reset" className="btn reset-btn" value="Paly Again!" onClick={() => dispatch(fetchNumber())}/>
  );
}

ResetNumber = connect()(ResetNumber);

ResetNumber.propTypes = {
  dispatch: PropTypes.func
};

export default ResetNumber;