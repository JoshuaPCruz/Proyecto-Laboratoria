import React from "react";
import styled from 'styled-components';

const ButtonMenu = styled.section`
    width: 20vw;
    height: 20vh;
    background: red;
    margin-top: 10vh;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
`


const Card = ({type, name})=>{
    return (
        <CardContainer>
            <ButtonMenu title={name}>
                <p title={name}>{name}</p>
            </ButtonMenu>
        </CardContainer>
    )
}

export default Card;