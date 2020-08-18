import React from "react";
import { useState } from "react";
import Styles from "../../styles/containers/DashboardListStyles";
import HistoryList from "../elements/HistoryList";
import PendingList from "../elements/PendingList";

const DashboardList = ({display, list, listPending})=>{

    const [mockList, changeMockList] = useState(list)
    const [dataPending, changeDataPending] = useState(listPending)

    const handleClick = ()=>{
        display('none','block')
    }
    
    return (
        <React.Fragment>
                <Styles.MainList>
                    <PendingList list={dataPending} setList={function(item){changeDataPending(item)}}></PendingList>
                    <HistoryList list={mockList}></HistoryList>
                    <Styles.Button onClick={handleClick}>NUEVA ORDEN</Styles.Button>
                </Styles.MainList>
        </React.Fragment>
    )
}

export default DashboardList