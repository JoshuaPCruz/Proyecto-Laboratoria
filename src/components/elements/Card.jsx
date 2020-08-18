import React from "react";
import Styles from "../../styles/elements/CardStyles";


const Card = ({type, name, complexity})=>{
    return (
        <Styles.CardContainer>
            <Styles.ButtonMenu name={name} data-complexity={complexity} title={name}>
                <p name={name} title={name} data-complexity={complexity} >{name}</p>
            </Styles.ButtonMenu>
        </Styles.CardContainer>
    )
}

export default Card;