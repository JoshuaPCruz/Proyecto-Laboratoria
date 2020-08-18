import styled from "styled-components";

const Styles = {
    OrderList: styled.div`
    display: flex;
    flex-direction: column;
    `,
    OrderItem: styled.ul`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    `,
    NoOrder: styled.p`
        text-align: center;
    `
}

export default Styles;