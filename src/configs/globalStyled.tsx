import { createGlobalStyle } from "styled-components";
import { breakpointsMedias } from "./breakpoints";
import configColor from "./configColor";

export const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
  }
  #root {
    min-height: 100vh;
    min-width: 100%;
  }
  :root{
    font-size:13px;
  }
  body {
    font-size: 13px;
    line-height: 1.17;
    background: #232328;
  }
  .container {
    width: 100%;
    padding: 0 40px;
    max-width: 1280px;
    ${breakpointsMedias.max1199}{
      padding: 0 24px;
    }
    ${breakpointsMedias.max767}{
      padding: 0 16px;
    }
  }
    .color-primary {
      color: ${configColor.colorWhite};
    }
    .text-center {
      text-align: center;
    }
    .text-uppercase {
      text-transform: uppercase;
    }
    .scrollbar {
      scrollbar-width: thin;
      scrollbar-color: #5EB5F7 #2d3031;
      &::-webkit-scrollbar {
              width: 4px !important;
              height: 4px !important;
              margin-top:10px;
          }
          &::-webkit-scrollbar-track {
              background: #2d3031 !important;
              border-radius: 6px !important;
          }
          &::-webkit-scrollbar-thumb {
              background: #5EB5F7 !important;
              border-radius: 6px !important;
          }
    }
`;