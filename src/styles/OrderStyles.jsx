import styled from "styled-components";


const Styles = {
    Dashboard: styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
`,

    MainDashboard: styled.section`
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
    `
}

export default Styles;