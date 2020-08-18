import React from "react";
import {useState} from 'react';
import DashboardList from "../elements/DashboardList";
import Order from "./Order";
import app from "../../firebase.js";
import styled from 'styled-components';

const List = styled.div`
    display: ${props=> props.hidde};
`;


const Home = ()=>{
    const [page, changePage] = useState('block')
    const [page2, changePage2] = useState('none')
    const [list, changeList] = useState([[]])
    const [listPending, changeListPending] = useState([[]])
    const [listOrder, changeListOrder] = useState([])

    const updateList = (item)=>{
        let aux = list
        let auxPending = listPending
        aux[0].push(item)
        auxPending[0].push(item)
        changeList(aux)
        changeListPending(auxPending)
    }
    return (
        <React.Fragment>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
            <List hidde={page}>
                <DashboardList list={list} listPending={listPending} display={function(item1, item2){changePage(item1), changePage2(item2)}}></DashboardList>
            </List>
            <List hidde={page2}>
                <Order list={listOrder} changeList={function(item){updateList(item)}} display={function(item1, item2){changePage(item1), changePage2(item2)}}></Order>
            </List>
        </React.Fragment>                            
    )
}

export default Home