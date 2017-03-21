import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import {Provider} from "react-redux";
import App from "./js/container/App";
import reducer from "./js/reducer";


const logger = createLogger();
const store = createStore(reducer, compose(applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// const store = applyMiddleware(thunk, logger)(createStore)(reducer);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("container")
);  

