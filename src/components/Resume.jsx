import React from "react";

const Resume = ({list})=>{
    return (
        <ul>
            {list.map((item,index)=>(
            <p key={index}>{item.name}</p>
            ))
            }
    </ul>
    )
}

export default Resume;