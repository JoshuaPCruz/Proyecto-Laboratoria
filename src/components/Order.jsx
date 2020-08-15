import React from "react";
import { useState } from "react";
import Styles from "../styles/OrderStyles";
import Resume from "./Resume";
import Card from "./Card";
import Methods from "../behaviours/arrays";


const Order = ()=> {

    const [mock, changeMock] = useState([])
    const [menu, changeMenu] = useState([
        {name: "egg"},
        {name: "milk"}
    ])

    const handleClick = (e)=>{
        const meal = [
            {name: "hamburger"},
            {name: "soda"}
        ]
        const breakfast = [
            {name: "egg"},
            {name: "milk"},
            {name: "juice"}
        ]
        let aux = mock;
        console.log(e.target)
        console.log(this)
        e.target.name === "meal" ? 
        changeMenu(meal) : 
        (e.target.name === "breakfast"?
        changeMenu(breakfast):'')
        aux = Methods.listCreation(aux,{name:e.target.title, count:1, price: (name, count)=>{
            return Methods.priceCalculation(name,count)
        }})
        changeMock([...aux])
    }

    return (
        <React.Fragment>
            <Styles.Dashboard>
                <section>
                    <input type="text" name="name" id=""/>
                </section>
                <Styles.MainDashboard>
                    <Styles.Menu onClick={handleClick}>
                        <div>
                            <button name="breakfast">DESAYUNO</button>
                            <button name="meal">RESTO DEL DIA</button>
                        </div>
                        <Styles.MenuItems>
                            {menu.map((item, index)=>(
                                <Card key={index} name={item.name}></Card>
                            ))}
                        </Styles.MenuItems>
                    </Styles.Menu>
                    <Resume list={mock}></Resume>
                </Styles.MainDashboard>
            </Styles.Dashboard>
        </React.Fragment>
    )
}



export default Order;