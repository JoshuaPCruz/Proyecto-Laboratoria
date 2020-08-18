import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Auth from "../../Auth";
import Home from "./Home";
import Private from "./Private";
import Container from "../../styles/GlobalStyle";


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