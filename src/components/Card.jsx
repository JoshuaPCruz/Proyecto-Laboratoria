import React from "react";
import styled from 'styled-components';

const Button = styled.section`
    width: 20vw;
    height: 20vh;
    background: red;
    margin: 1vw;
    margin-top: 10vh;
`

const Card = ({type})=>{
    return (
        <Button title={type}>
            <p>{type}</p>
        </Button>
    )
}

export default Card;