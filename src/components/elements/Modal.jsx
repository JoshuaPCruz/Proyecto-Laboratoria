import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Wind = styled.div`
    display: grid;
    width: 40vw;
    background: gray;
`

const Variant = styled.span`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    ${props =>
        props.selected &&
        `background: cornflowerblue;`
        }
`

const PVariant = styled.p`
    margin: 0;
    height: 100%;
    width: 100%;
    text-align:center;
    ${props =>
        props.selected &&
        `background: cornflowerblue;`
        }
`


const Modal = ({lista, ordenCompleta})=>{
    const [list, changeList] = useState(lista.extras)
    useEffect(()=>{
        changeList(lista.extras)
    },[lista])


    const handleSend = ()=>{
        ordenCompleta(lista.name, list)
    }
    const handleClick = (e,index, item)=>{
        console.log(item)
        let aux = list;
        aux[index].map((value)=> value.name == e.target.title ? value.selected = !value.selected :value.selected = false)
        changeList([...aux])
    }
    const variants = (item)=>{
        return (item.map((value, index)=>(
             <PVariant key={index} title={value.name} selected={value.selected} >{value.name}</PVariant>
            ))
        )
        }
            
    return(
        <Wind>
            {list.map((item, index)=>(
                <Variant key={index} onClick={function(e,i = index, it=item){handleClick(e,i, it)}}>
                    {
                        variants(item)
                    }
                </Variant>    
            ))}
            <button title="send" onClick={function(){handleSend()}}>SEND</button>
            <button title="exit">EXIT</button>
        </Wind>
    )
}

export default Modal