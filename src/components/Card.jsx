import React from "react";
import styled from 'styled-components';

const Button = styled.section`
    width: 100px;
    height: 100px;
    background: red;
    margin: 50px;
    position: relative;
    z-index: 1;
`

const Card = ({type})=>{
    return (
        <Button title={type}>
            <p>{type}</p>
        </Button>
    )
}

export default Card;