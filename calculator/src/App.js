import React, { Component} from 'react'
import { GlobalStyle } from './components/theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Content } from './components/styles/Content.styled';
import Screen from './components/Screen';
import Keypad from './components/Keypad'
import './index.css';
import "typeface-spartan"
// import data from './components/theme/schema.json'

const theme = {
    colors: {
        mainBg: "hsl(222, 26%, 31%)",
        toggleBg: "hsl(223, 31%, 20%)",
        ScreenBg: "hsl(224, 36%, 15%)",
        keybgprimary:"hsl(225, 21%, 49%)",
        keyshadowprimary:"hsl(224, 28%, 35%)",
        keybgsecondary:"hsl(6, 63%, 50%)",
        keyshadowsecondary: "hsl(6, 70%, 34%)",
        keybgtertiary:"hsl(30, 25%, 89%)",
        keyshadowtertiary: "hsl(28, 16%, 65%)",
        textcolor: "hsl(221, 14%, 31%)",
        titlecolor:"white",
    },
   colors2: {
        mainBg: "hsl(0, 0%, 90%)",
        toggleBg: "hsl(0, 5%, 81%)",
        ScreenBg: "hsl(0, 0%, 93%)",
        keybgprimary: "hsl(185, 42%, 37%)",
        keyshadowprimary:"hsl(185, 58%, 25%)",
        keybgsecondary:"hsl(25, 98%, 40%)",
        keyshadowsecondary: "hsl(25, 99%, 27%)",
        keybgtertiary:"hsl(45, 7%, 89%)",
        keyshadowtertiary: "hsl(35, 11%, 61%)",
        textcolor:  "hsl(60, 10%, 19%)",
        titlecolor: "black",
   }, 
   colors3: {
        mainBg: "hsl(268, 75%, 9%)",
        toggleBg: "hsl(268, 71%, 12%)",
        ScreenBg: "hsl(268, 71%, 12%)",
        keybgprimary: "hsl(281, 89%, 26%)",
        keyshadowprimary:" hsl(290, 70%, 36%)",
        keybgsecondary:"hsl(176, 100%, 44%)",
        keyshadowsecondary: " hsl(177, 92%, 70%)",
        keybgtertiary:"hsl(268, 47%, 21%)",
        keyshadowtertiary: " hsl(285, 91%, 52%)",
        textcolor:  "hsl(52, 100%, 62%)",
        titlecolor: "hsl(52, 100%, 62%)",
   }
}




class App extends Component {  
  constructor() {
    super();

      this.state = {
            result:""
}
}



onClick = button => {

if(button === "="){
    this.calculate()
}

else if(button === "res"){
    this.reset()
}
else if(button === "del"){
    this.backspace()
}

else {
    this.setState({
        result: this.state.result + button
    })
}
};


calculate = () => {
try {
    this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "" ) + ""
    })
} catch (e) {
    this.setState({
        result: "error"
    })
}
};

reset = () => {
  this.setState({
      result: ""
  })
};

backspace = () => {
  this.setState({
      result: this.state.result.slice(0, -1)
  })
};


render() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Content>
      <Header />
      <Screen result={this.state.result}/>
      <Keypad onClick={this.onClick}/>
      </Content>
    </>
    </ThemeProvider>
  );
}
}
export default App;
