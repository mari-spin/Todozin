import { createGlobalStyle } from 'styled-components';

const ResetCSS = createGlobalStyle`
    /* Reset box model */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Reset margin and padding */
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul,
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
        margin: 0;
        padding: 0;
    }

    /* Reset list style */
    ul,
    ol {
        list-style: none;
    }

    /* Reset heading styles */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: normal;
    }

    /* Reset default font styles */
    body {
        font-family: Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;

        overflow-x:hidden ;
        scroll-behavior: smooth;
    }

    img {
        max-width: 100%;
    }
`;

export default ResetCSS;
