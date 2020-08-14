import React from "react";
import { useState, useEffect } from "react";
import Styles from "../styles/OrderStyles";
import Resume from "./Resume";
import Card from "./Card";



const Order = ()=> {

    const [mock, changeMock] = useState([
        {name:"hola1"},
        {name:"hola2"},
        {name:"hola3"}
    ])

    const handleClick = (e)=>{
        changeMock([...mock,{name:e.target.title}])
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