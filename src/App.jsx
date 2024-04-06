import React from "react";
import Navegacao from "./components/Navegacao";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-image: url('../src/assets/background.png');
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'PT Sans', sans-serif;
  }
`

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Navegacao />
    </>
  )
}
