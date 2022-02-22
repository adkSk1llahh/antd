import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import {createStore} from "redux";
import Provider from "react-redux/lib/components/Provider";
//
// const defaultStore = {
//     cash: 0,
// }
// let action;
// action = {type: "", payload: ""}
//
// const reducer = (state = defaultStore, action) => {
//     switch (action.type) {
//         case "ADD":
//             return {...state, cash: state.cash + action.payload}
//         case "GET":
//             return {...state, cash: state.cash - action.payload}
//         default:
//             return state
//     }
// }
//
// const store = createStore(reducer)

ReactDOM.render(
    // <Provider store={store}>
    //
    // </Provider>
<App/>
    ,
    document.getElementById('root')
);

