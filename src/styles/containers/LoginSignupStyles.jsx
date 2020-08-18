import styled from "styled-components";

const Styles = {
    Window: styled.section`
    position: fixed;
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(100px, 1fr));
    justify-items: center;
    width: 30vw;
    height: 50vh;
    top: 15vh;
    left: 33vw;
    `,
    Form: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    `,
    Label: styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    `,
    Div: styled.div`
    display: flex;
    justify-content: center;
    `,
    Span: styled.span`
    align-self: center;
    `
}

export default Styles;