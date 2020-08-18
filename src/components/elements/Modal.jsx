import React from "react";
import { useState, useEffect } from "react";
import Styles from "../../styles/elements/ModalStyles";


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
             <Styles.PVariant key={index} title={value.name} selected={value.selected} >{value.name}</Styles.PVariant>
            ))
        )
        }
            
    return(
        <Styles.Window>
            {list.map((item, index)=>(
                <Styles.Variant key={index} onClick={function(e,i = index, it=item){handleClick(e,i, it)}}>
                    {
                        variants(item)
                    }
                </Styles.Variant>    
            ))}
            <button title="send" onClick={function(){handleSend()}}>SEND</button>
            <button title="exit">EXIT</button>
        </Styles.Window>
    )
}

export default Modal