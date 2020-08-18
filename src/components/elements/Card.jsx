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


const Card = ({type, name, complexity})=>{
    return (
        <CardContainer>
            <ButtonMenu name={name} data-complexity={complexity} title={name}>
                <p name={name} title={name} data-complexity={complexity} >{name}</p>
            </ButtonMenu>
        </CardContainer>
    )
}

export default Card;