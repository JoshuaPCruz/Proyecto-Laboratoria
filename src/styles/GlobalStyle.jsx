import { createGlobalStyle } from 'styled-components';

const Container = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        touch-action: none;
        font-family: Noto sans, sans-serif;
        background: #dac9ae;
    }

    button{
        border-radius: 25px;
        background: white;
    }

    button:hover {
        box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
        transition: all 0.2s ease;
    }
`;

export default Container