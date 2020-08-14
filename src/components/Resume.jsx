import React from "react";
import { useState,useEffect } from "react";
import Methods from "../behaviours/arrays";

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
        <ul>
            {orderList.map((item,index)=>(
            <div key={`${index}div`}>
                <button key={`${index}plus`}>+</button>
                <button key={`${index}minus`} name={index} onClick={function(e){handleMinus(e)}}>-</button>
                <p key={index}>{item.name}</p>
                <p>{item.count}</p>
            </div>
            ))
            }
        </ul>
    )
}

export default Resume;