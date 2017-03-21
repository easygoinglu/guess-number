import React, {PropTypes} from "react";
import {Component} from "react";
import {connect} from "react-redux"
import {fetchNumber} from "../action";
import AddNumber from "../container/AddNumber";
import NumberRange from "../container/NumberRange";
import ResetNumber from "../container/ResetNumber";
import "normalize.css";
import "../../css/main.less";

class App extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(fetchNumber());
  }

  render(){
    return(
      <div>
        <AddNumber/>      
        <NumberRange/>
        <ResetNumber/>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(App);