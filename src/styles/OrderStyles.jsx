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
    height: 100vh;
`,
    Menu: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    `
}

export default Styles;