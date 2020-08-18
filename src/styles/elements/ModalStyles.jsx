import styled from "styled-components";

const Styles = {
    Window: styled.div`
    display: grid;
    width: 40vw;
    height: 45vh;
    border-radius: 15px;
    background: transparent;
    `,
    Variant: styled.span`
        display: grid;
        background: white;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        }
        ${props =>
            props.selected &&
            `background: cornflowerblue;`
            }
    `,
    PVariant: styled.p`
        margin: 0;
        height: 100%;
        width: 100%;
        text-align:center;
        ${props =>
            props.selected &&
            `background: cornflowerblue;`
            }
    `
}

export default Styles;

