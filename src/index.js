import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./redux";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// //? store
// //? action
// const increament = () => {
//   return {
//     type: "INCREAMENT",
//   };
// };
// const decreament = () => {
//   return {
//     type: "DECREAMENT",
//   };
// };

// //? reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREAMENT":
//       return state + 1;
//     case "DECREAMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const store = createStore(counter);

// //? display
// store.subscribe(() => console.log(store.getState()));

// //? dispatch

// store.dispatch(increament());
