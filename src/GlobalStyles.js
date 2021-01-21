import { createGlobalStyle } from 'styled-components';
import bgStar from './images/bg-stars.svg';

export const GlobalStyle = createGlobalStyle`
    /* html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    } */
    body {
        font-family: 'Red Hat Text', sans-serif;
        font-size: 14px;
        background: hsl(235, 16%, 14%) url(${bgStar}) no-repeat;
        margin: 0;
        padding: 0;
        width: 100%;
        min-width: 800px;
    }

`;
