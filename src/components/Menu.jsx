import React from "react";

const Menu = ({handleClick})=>{
    
    return (
        <React.Fragment>
            <div>
                <button onClick={handleClick.method("adios")} id="hola">Click</button>
            </div>
        </React.Fragment>
    )
}

export default Menu;