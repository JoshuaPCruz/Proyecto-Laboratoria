import React from "react";
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


const PendingList = ({list})=>{
    if(list.length === 0) return(
        <NoOrder>SIN ORDENES</NoOrder>
    )
    return(
        <React.Fragment>
            <OrderList>
            {list.map((value, index)=>{
                    return (
                        <OrderItem key={`${index} list`}>
                            <div key={`${index} name`}>{value.name}</div>
                            <div key={`${index} price`}>{value.price}</div>
                            <div>
                                <button>MARCAR COMO LISTA</button>
                            </div>
                        </OrderItem>
                    )
                })}
            </OrderList>
        </React.Fragment>
    )
}

export default PendingList