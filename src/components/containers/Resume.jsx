import React from "react";
import { useState,useEffect } from "react";
import Methods from "../../behaviours/methods";
import Styles from "../../styles/containers/ResumeStyles";


const Resume = ({list, variants,display, changeList, clientName, changeMock})=>{

    const [orderList,changeOrderList] = useState(list)
    const [check,changeTotal] = useState(0)

    useEffect(()=>{
        changeOrderList(list)
        changeTotal(total())
    }
    ,[list, orderList])

    /**
     * Handle the minus button event
     */
    const handleMinus = (e)=>{
        let aux = list
        aux = Methods.removeItem(aux, e.target.name)
        changeOrderList([...aux])
    }
    /**
     * Handle the plus button event
     */
    const handlePlus = (e)=>{
        let aux = list
        aux = Methods.addItem(aux, e.target.name)
        changeOrderList([...aux])
    }
    /**
     * Handles when an order is complete
     */
    const handleEnter = ()=>{
        if(clientName === ''){
            return alert("Ingrese nombre del cliente")
        }
        const aux = {
            name: clientName,
            price: total(),
            state: 'pendiente'
        }
        const input = document.getElementById("clientName")
        input.value= ''
        changeMock([])
        display('block','none');
        changeList(aux)
    }
    /**
     * Calculates the total of the order
     */
    const total = ()=>{
        let res = orderList.map((value)=>(value.price()))
        res.length !== 0 ?
        res = res.reduce((actual, next)=>(parseInt(actual)+parseInt(next))):
        ''
        return res
    }


    return (
        <React.Fragment>
            <Styles.GeneralOrder>
                <Styles.OrderList>
                    {orderList.map((item,index)=>(
                    <Styles.OrderItem key={`${index}div`}>
                        <div>
                            <button key={`${index}plus`} name={index} onClick={function(e){handlePlus(e)}}>+</button>
                            <button key={`${index}minus`} name={index} onClick={function(e){handleMinus(e)}}>-</button>
                        </div>
                        <p>{item.count}</p>
                        <div>
                        <p key={index}>{item.name}</p>
                        </div>
                        <p>{`$${item.price(item.name, item.count)}`}</p>
                    </Styles.OrderItem>
                    ))
                    }
                    {(orderList.length > 0)?
                    <p>{`TOTAL     $${check}`}</p>:
                    ''
                    }
                    
                </Styles.OrderList>
                {(orderList.length > 0)?
                    <button onClick={handleEnter}>ENVIAR</button>:
                    ''
                }
            </Styles.GeneralOrder>
        </React.Fragment>
    )
}

export default Resume;