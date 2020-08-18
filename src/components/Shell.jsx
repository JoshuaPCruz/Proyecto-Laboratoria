import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Auth from "../Auth";
import Home from "./Home";
import Private from "./Private";
import { createGlobalStyle } from 'styled-components';

const Container = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        touch-action: none;
    }
`;


const Shell = () => {

    return (
        <Auth>
            <Router>
                <Container/>
                <div>
                    <Private exact path="/" component={Home} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Router>
        </Auth>
    );
};

export default Shell;