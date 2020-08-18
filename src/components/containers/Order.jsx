import React from "react";
import { useState, useEffect } from "react";
import Styles from "../../styles/containers/OrderStyles";
import Resume from "./Resume";
import Card from "../elements/Card";
import Methods from "../../behaviours/methods";
import CONST from "../../behaviours/constants";
import Modal from "../elements/Modal";


const Order = ({display, changeList, list})=> {

    const [mock, changeMock] = useState(list)
    const [variants, changeVariants] = useState('none')
    const [menu, changeMenu] = useState(CONST.BREAKFAST)
    const [modalLista, changeModalLista] = useState({extras:[[{name:'test'}]]})
    const [ordenCompleta, changeOrden] = useState([])
    const [recipe, changeRecipe] = useState('')
    const [clientName, changeClientName] = useState('')
    const [clientNameValue, changeClientNameValue] = useState('')

    /**
     * This Observer, is set to add a new value t the order, rigth after the Modal sends his values
     * As the modal sends his values in the form of [[Array]], it has to be filter twice
     * Also the reduce is for calculatin the total price after the filters
     */
    useEffect(()=>{

        let aux = ordenCompleta
        let auxMock = mock
        
        if(aux.length !== 0){
            aux = aux.map((item)=>{
                return item.filter((value)=>{
                    return value.selected == true
                })  
            })
            let name = ''
            let nombre = aux.filter((value)=>{return value.length === 1})
            nombre = nombre.map((value)=>{
                return name += ` y ${value[0].name}`
            })
            aux = aux.map((item)=>{
                return item.length !== 0 ?
                (item.reduce((actual, newValue)=>{
                    return actual.price + newValue.price
                })): {price:0};
            })

            aux = aux.map((item)=>{
                return item.price
            })
            aux = aux.reduce((total, value)=>{
                return total + value
            })
            let resultado = Methods.factory({extraPrice: 0, name: `${recipe}${name} `, count:1, complexity: 'yes', extras:ordenCompleta, priceBase:5},)
            resultado.extraPrice = aux
            resultado.complexity = 'yes'
            auxMock = Methods.listCreation(auxMock,resultado)
            changeMock([...auxMock])
        }
        changeVariants('none')
    },[ordenCompleta])

    /**
     * This function catches all the clicks in this component and 
     * determines the action taken based on the target
     */
    const handleClick = (e)=>{
        let aux = mock;
        let resultado;
        let auxMenu = menu

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
                changeRecipe(e.target.title) 
                auxMenu = auxMenu.filter((value)=>{
                    return value.name === e.target.title
                })
                changeModalLista(auxMenu[0])
                changeVariants('flex')
                break;
            case 'no':
                resultado = Methods.factory(e.target.title)
                resultado.complexity = 'no'
                aux = Methods.listCreation(aux,resultado)
                changeMock([...aux])
                break;
            default:
                break;
        }
    }

    /**
     * Function to handle the change on the input text area
     */
    const handleChange = (e)=>{
        changeClientName(e.target.value)
    }



    return (
        <React.Fragment>
            <Styles.Dashboard>
                <Styles.HeaderDashboard>
                    <Styles.Input id="clientName"type="text" name="name" onChange={handleChange} placeholder={"NOMBRE DEL CLIENTE"} />
                </Styles.HeaderDashboard>
                <Styles.MainDashboard>
                    <Styles.ModalVariants hidde={variants}  onClick={handleClick}>
                        <Modal lista={modalLista} ordenCompleta={function(recipe,item){changeRecipe(recipe); changeOrden(item);}}></Modal>
                    </Styles.ModalVariants>
                    <Styles.Menu onClick={handleClick}>
                        <div>
                            <button name="breakfast">DESAYUNO</button>
                            <button name="meal">RESTO DEL DIA</button>
                        </div>
                        <Styles.MenuItems>
                            {menu.map((item, index)=>(
                                <Card key={index} name={item.name} complexity={item.complexity} ></Card>
                            ))}
                        </Styles.MenuItems>
                    </Styles.Menu>
                    <Resume clientName={clientName} changeMock={function(item, item2){changeMock(item); changeClientNameValue(item2)}} changeList={changeList} list={mock} display={display} variants={function(value, modalItems){changeVariants(value); changeModalLista(modalItems)}}></Resume>
                </Styles.MainDashboard>
            </Styles.Dashboard>
        </React.Fragment>
    )
}



export default Order;