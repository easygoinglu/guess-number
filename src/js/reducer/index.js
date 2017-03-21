import {combineReducers} from "redux";
import userNumbers from "./userNumbers";
import correctNumber from "./correctNumber";

const guessNumberApp = combineReducers({userNumbers, correctNumber});

export default guessNumberApp;