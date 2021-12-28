import React from 'react'
import { GlobalStyle } from './components/theme/globalStyles';
import Header from './components/Header';
import { Content } from './components/styles/Content.styled';
import Screen from './components/Screen';
import Keypad from './components/Keypad'
import './index.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Content>
      <Header />
      <Screen />
      <Keypad />
      </Content>
    </>
  );
}

export default App;
