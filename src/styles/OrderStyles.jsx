import styled from "styled-components";


const Styles = {
    HeaderDashboard: styled.header`
    display: flex;
    justify-content: flex-end;
`,
    Dashboard: styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
`,

    MainDashboard: styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh
`,
    Menu: styled.section`
    display: grid;
    grid-template-rows: .01fr 1fr;
    height: 100vh;
`,
    MenuItems: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start
`,
    ModalVariants: styled.div`
    display: ${props=> props.hidde};
    position: fixed;
    z-index: 1; /* Sit on top */
    left: 30vw;
    top: 30vh;
    `    
}

export default Styles;