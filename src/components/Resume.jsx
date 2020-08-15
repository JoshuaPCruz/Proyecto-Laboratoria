import React from "react";
import styled from 'styled-components';
import { useState,useEffect } from "react";
import Methods from "../behaviours/arrays";


const OrderItem = styled.div`
    display: flex;
    justify-content: space-around;
`

function showAlert(message) {
    alert(JSON.stringify(message[0]))
}

const Resume = ({list})=>{

    const [orderList,changeOrderList] = useState(list)

    useEffect(()=>(
        changeOrderList(list)
    ),[list])

    const handleMinus = (e)=>{
        let aux = list
        aux = Methods.removeItem(aux, e.target.name)
        changeOrderList([...aux])
    }

    return (
        <React.Fragment>
            <div>
                <ul>
                    {orderList.map((item,index)=>(
                    <OrderItem key={`${index}div`}>
                        <div>
                            <button key={`${index}plus`}>+</button>
                            <button key={`${index}minus`} name={index} onClick={function(e){handleMinus(e)}}>-</button>
                        </div>
                        <p>{item.count}</p>
                        <p key={index}>{item.name}</p>
                        <p>{item.price(item.name, item.count)}</p>
                    </OrderItem>
                    ))
                    }
                </ul>
                <button onClick={function(){showAlert(orderList)}}>ENVIAR</button>  
            </div>
        </React.Fragment>
    )
}

export default Resume;