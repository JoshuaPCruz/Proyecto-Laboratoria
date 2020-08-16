import React from "react";
import styled from "styled-components";

const Wind = styled.div`
    display: grid;
    width: 40vw;
    background: gray;
`

const Variant = styled.span`
    display: flex;
    justify-content: space-around;
`

const variants = (item)=>{
    console.log('variants')
    return (item.map((value, index)=>(
         <p key={`${index}key`}>{value}</p>
        ))
    )
    }

const Modal = ({lista})=>{
    console.log(lista)
    return(
        <Wind>
            {lista.map((item, index)=>(
                <Variant key={index}>
                    {
                        variants(item)
                    }
                </Variant>    
            ))}
            <button title="exit">EXIT</button>
        </Wind>
    )
}

export default Modal