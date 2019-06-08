import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;    
        font-size: 14px;
    }

    a {
        text-decoration: none;
        color: inherit;
        &:hover, &:focus {
            color: inherit;
            text-decoration: none;
        }
    }

    button {
        &:focus {
            outline: none;
        }
    }
`;

export default globalStyles;
