import React from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Main } from "../routes/Main";
import { RED } from "../global/RootReducer";

export const App = () => {
    return (
        <Provider store={RED}>
            <React.Fragment>
                <Main />
                <ToastContainer />
            </React.Fragment>
        </Provider>
    );
};


