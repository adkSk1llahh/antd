import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import Provider from "react-redux/lib/components/Provider";
import { store } from "./store";

ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,

<App />,

  document.getElementById("root")
);
