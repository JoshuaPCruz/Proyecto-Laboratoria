import React from "react";
import styled from 'styled-components';
import { useState,useEffect } from "react";
import Methods from "../behaviours/methods";


const OrderItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

const GeneralOrder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Resume = ({list})=>{

    const [orderList,changeOrderList] = useState(list)
    const [check,changeTotal] = useState(0)

    useEffect(()=>{
        changeOrderList(list)
        changeTotal(total())
    }
    ,[list, orderList])

    const handleMinus = (e)=>{
        let aux = list
        aux = Methods.removeItem(aux, e.target.name)
        changeOrderList([...aux])
    }

    const handlePlus = (e)=>{
        let aux = list
        aux = Methods.addItem(aux, e.target.name)
        changeOrderList([...aux])
    }

    const total = ()=>{
        let res = orderList.map((value)=>(value.price()))
        console.log(res)
        res.length !== 0 ?
        res = res.reduce((actual, next)=>(parseInt(actual)+parseInt(next))):
        ''
        return res
    }


    return (
        <React.Fragment>
            <GeneralOrder>
                <ul>
                    {orderList.map((item,index)=>(
                    <OrderItem key={`${index}div`}>
                        <div>
                            <button key={`${index}plus`} name={index} onClick={function(e){handlePlus(e)}}>+</button>
                            <button key={`${index}minus`} name={index} onClick={function(e){handleMinus(e)}}>-</button>
                        </div>
                        <p>{item.count}</p>
                        <p key={index}>{item.name}</p>
                        <p>{item.price(item.name, item.count)}</p>
                    </OrderItem>
                    ))
                    }
                    {(orderList.length > 0)?
                    <p>TOTAL {check}</p>:
                    ''
                    }
                    
                </ul>
                {(orderList.length > 0)?
                    <button onClick={function(){console.log(orderList[0].price())}}>ENVIAR</button>:
                    ''
                }
            </GeneralOrder>
        </React.Fragment>
    )
}

export default Resume;