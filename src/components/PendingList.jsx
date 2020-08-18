import React, {useState} from "react";
import styled from "styled-components";


const OrderList = styled.div`
    display: flex;
    flex-direction: column;
`

const OrderItem = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const NoOrder = styled.p`
    text-align: center;
`



const PendingList = ({list, setList})=>{
    console.log(list)
    const [pendingList, setPendingList] = useState(list[0])
    console.log(pendingList)
    const handleClick = (e,index)=>{
        let aux = pendingList
        let auxHistory = aux.map((value, indexHistory)=>{
            indexHistory === index ? value.state = 'Ready' : ''
        })
        aux = aux.filter((value, auxIndex)=>{
            return auxIndex !== index
        })
        setList([aux])
    }

    if(pendingList.length === 0) return(
        <NoOrder>SIN ORDENES</NoOrder>
    )
    return(
        <React.Fragment>
            <OrderList>
            {pendingList.map((value, index)=>{
                    return (
                        <OrderItem key={`${index} list`} >
                            <div key={`${index} name`}>{value.name}</div>
                            <div key={`${index} price`}>{value.price}</div>
                            <div>
                                <button onClick={function(e,item = value){handleClick(e,index)}}>MARCAR COMO LISTA</button>
                            </div>
                        </OrderItem>
                    )
                })}
            </OrderList>
        </React.Fragment>
    )
}

export default PendingList