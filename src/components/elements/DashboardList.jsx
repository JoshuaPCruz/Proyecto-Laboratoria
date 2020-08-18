import React from "react";
import { useState } from "react";
import styled from "styled-components";
import HistoryList from "./HistoryList";
import PendingList from "./PendingList";

const MainList = styled.main`
    display: grid;
    grid-template-rows: 45vh 45vh auto;
    height: 100vh;
`


const DashboardList = ({display, list, listPending})=>{
    const [mockList, changeMockList] = useState(list)
    const [dataPending, changeDataPending] = useState(listPending)
    const handleClick = ()=>{
        display('none','block')
    }
    return (
        <React.Fragment>
                <MainList>
                    <PendingList list={dataPending} setList={function(item){changeDataPending(item)}}></PendingList>
                    <HistoryList list={mockList}></HistoryList>
                    <button onClick={handleClick}>NUEVA ORDEN</button>
                </MainList>
        </React.Fragment>
    )
}

export default DashboardList