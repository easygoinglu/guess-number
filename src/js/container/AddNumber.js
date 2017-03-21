import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {addNumber} from "../action";

let AddNumber = ({ dispatch }) => {
  let input;

  return (
    <div>
      <div>Guess number(1 ~ 100)</div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }

        dispatch(addNumber(parseInt(input.value)))
        input.value = ""
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit" className="btn">
          Add Number
        </button>
      </form>
    </div>
  )
}
AddNumber = connect()(AddNumber)

AddNumber.propTypes = {
  dispatch: PropTypes.func
};

export default AddNumber;