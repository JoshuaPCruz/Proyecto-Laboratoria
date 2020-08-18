import React, {useState} from "react";
import Styles from "../../styles/elements/PendingListStyles";


const PendingList = ({list, setList})=>{
    const [pendingList, setPendingList] = useState(list[0])
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
        <Styles.NoOrder>SIN ORDENES</Styles.NoOrder>
    )
    return(
        <React.Fragment>
            <Styles.OrderList>
            {pendingList.map((value, index)=>{
                    return (
                        <Styles.OrderItem key={`${index} list`} >
                            <div key={`${index} name`}>{value.name}</div>
                            <div key={`${index} price`}>{value.price}</div>
                            <div>
                                <button onClick={function(e,item = value){handleClick(e,index)}}>MARCAR COMO LISTA</button>
                            </div>
                        </Styles.OrderItem>
                    )
                })}
            </Styles.OrderList>
        </React.Fragment>
    )
}

export default PendingList