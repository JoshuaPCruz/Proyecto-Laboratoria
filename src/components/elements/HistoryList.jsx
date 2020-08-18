import React from "react";
import Styles from "../../styles/elements/HistoryListStyles";


const HistoryList = ({list})=>{
    if(list[0].length === 0) return(
        <Styles.NoOrder>SIN ORDENES</Styles.NoOrder>
    )
    return(
        <React.Fragment>
            <Styles.OrderList>
            {list[0].map((value, index)=>{
                    return (
                        <Styles.OrderItem key={`${index} list`}>
                            <div key={`${index} name`}>{value.name}</div>
                            <div key={`${index} price`}>{value.price}</div>
                            <div key={`${index} state`}>{value.state}</div>
                        </Styles.OrderItem>
                    )
                })}
            </Styles.OrderList>
        </React.Fragment>
    )
}

export default HistoryList