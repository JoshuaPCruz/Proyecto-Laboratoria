import React from "react";
import { useState } from "react";
import Styles from "../styles/OrderStyles";
import Resume from "./Resume";
import Card from "./Card";
import Methods from "../behaviours/methods";
import CONST from "../behaviours/constants";
import Modal from "./Modal";
import styled from "styled-components";


const Order = ()=> {

    const [mock, changeMock] = useState([])
    const [variants, changeVariants] = useState('none')
    const [menu, changeMenu] = useState(CONST.BREAKFAST)

    const handleClick = (e)=>{
        let aux = mock;
        let resultado;
        switch (e.target.name) {
            case "meal":
                changeMenu(CONST.MEAL)
                break;
            case "breakfast":
                changeMenu(CONST.BREAKFAST)
                break;    
            default:
                break;
        }
        e.target.title === 'exit' ? changeVariants('none'):'';
        switch (e.target.dataset.complexity) {
            case 'yes':
                changeVariants('flex')
                break;
            case 'no':
                resultado = Methods.factory(e.target.title)
                aux = Methods.listCreation(aux,resultado)
                changeMock([...aux])
                break;
            default:
                break;
        }
    }

    const aux = [['variante1','variante2','variante1','variante2','variante1','variante2'],['variante1','variante2'],['variante1','variante2'],['variante1','variante2','variante3']]


    return (
        <React.Fragment>
            <Styles.Dashboard>
                <Styles.HeaderDashboard>
                    <input type="text" name="name" id=""/>
                </Styles.HeaderDashboard>
                <Styles.MainDashboard>
                    <Styles.ModalVariants hidde={variants}  onClick={handleClick}>
                        <Modal lista={aux}></Modal>
                    </Styles.ModalVariants>
                    <Styles.Menu onClick={handleClick}>
                        <div>
                            <button name="breakfast">DESAYUNO</button>
                            <button name="meal">RESTO DEL DIA</button>
                        </div>
                        <Styles.MenuItems>
                            {menu.map((item, index)=>(
                                <Card key={index} name={item.name} complexity={item.complexity}></Card>
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