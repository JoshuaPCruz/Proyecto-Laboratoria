import React from "react";
import { useState } from "react";
import Styles from "../styles/OrderStyles";
import Resume from "./Resume";
import Card from "./Card";
import Methods from "../behaviours/arrays";


const Order = ()=> {

    const [mock, changeMock] = useState([])

    const handleClick = (e)=>{
        let aux = mock;
        let res = Methods.listCreation(aux,{name:e.target.title, count:1})
        changeMock([...res])
    }

    return (
        <React.Fragment>
            <Styles.Dashboard>
                <section>
                    <input type="text" name="name" id=""/>
                </section>
                <Styles.MainDashboard>
                    <Styles.Menu onClick={handleClick}>
                        <Card type="hamburguesa"></Card>
                        <Card type="soda"></Card>
                        <Card type="sandwich"></Card>
                        <Card type="egg"></Card>
                    </Styles.Menu>
                    <Resume list={mock}></Resume>
                </Styles.MainDashboard>
            </Styles.Dashboard>
        </React.Fragment>
    )
}



export default Order;