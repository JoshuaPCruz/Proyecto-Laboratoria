import styled from "styled-components";

const Styles = {
    OrderItem: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    `,
    GeneralOrder: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `,
    OrderList: styled.ul`
        overflow: auto;
    `
}

export default Styles;