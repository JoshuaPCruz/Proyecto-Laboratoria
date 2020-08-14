import React from 'react';
import Order from "./Order";
import { createGlobalStyle } from 'styled-components';

const Container = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }
`;

const Shell = () => {
    return (
        <React.Fragment>
            <Container/>
            <Order></Order>
        </React.Fragment>
    );
};

export default Shell;