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
const OrderList = styled.ul`
    overflow: scroll
`

const Resume = ({list, variants})=>{

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

    const handleVariants = (e)=>{
        let aux = variants
        const extras = orderList[e.target.name]
        console.log(extras)
        aux('yes', extras)
    }

    const total = ()=>{
        let res = orderList.map((value)=>(value.price()))
        res.length !== 0 ?
        res = res.reduce((actual, next)=>(parseInt(actual)+parseInt(next))):
        ''
        return res
    }
    const extras = (item)=>{
        let aux = item.map((value)=>{
            return value.filter((value)=>{
                return value.selected === true
            })
        })
        aux = aux.filter((value)=>{
            return value.length === 1
        })
        return aux[0] !== undefined ? aux[0][0].name : ''
    }


    return (
        <React.Fragment>
            <GeneralOrder>
                <OrderList>
                    {orderList.map((item,index)=>(
                    <OrderItem key={`${index}div`}>
                        <div>
                            {(item.complexity === 'yes')?
                            <button key={`${index}pencil`} name={index} onClick={function(e){handleVariants(e)}}>pencil</button>:
                            ''
                            }
                            <button key={`${index}plus`} name={index} onClick={function(e){handlePlus(e)}}>+</button>
                            <button key={`${index}minus`} name={index} onClick={function(e){handleMinus(e)}}>-</button>
                        </div>
                        <p>{item.count}</p>
                        <div>
                        <p key={index}>{item.name}</p>
                        </div>
                        <p>{item.price(item.name, item.count)}</p>
                    </OrderItem>
                    ))
                    }
                    {(orderList.length > 0)?
                    <p>TOTAL {check}</p>:
                    ''
                    }
                    
                </OrderList>
                {(orderList.length > 0)?
                    <button onClick={function(){console.log(orderList[0].price())}}>ENVIAR</button>:
                    ''
                }
            </GeneralOrder>
        </React.Fragment>
    )
}

export default Resume;