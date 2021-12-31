import React, {Component}  from 'react';
import {Container, KeyboardTop, KeyboardBtm, Button, ButtonBtm1, ButtonBtm2, ButtonOdd} from './styles/Keypad.styled';

class Keypad extends Component {

  render() {
    return (
         <Container className="container">
          <KeyboardTop className="keyboard-top">
            
            <Button className="btn" name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button>
            <Button className="btn" name="8" onClick={e => this.props.onClick(e.target.name)}>8</Button> 
            <Button className="btn" name="9" onClick={e => this.props.onClick(e.target.name)}>9</Button>
            <ButtonOdd className="btn odd-btn" name="del" onClick={e => this.props.onClick(e.target.name)}>DEL</ButtonOdd>
            
            <Button className="btn" name="4" onClick={e => this.props.onClick(e.target.name)}>4</Button>
            <Button className="btn" name="5" onClick={e => this.props.onClick(e.target.name)}>5</Button>
            <Button className="btn" name="6" onClick={e => this.props.onClick(e.target.name)}>6</Button>
            <Button className="btn" name="+" onClick={e => this.props.onClick(e.target.name)}>+</Button>
          
            <Button className="btn" name="3" onClick={e => this.props.onClick(e.target.name)}>3</Button>
            <Button className="btn" name="2" onClick={e => this.props.onClick(e.target.name)}>2</Button>
            <Button className="btn" name="1" onClick={e => this.props.onClick(e.target.name)}>1</Button>
            <Button className="btn" name="-" onClick={e => this.props.onClick(e.target.name)}>-</Button>
            
            <Button className="btn" name="." onClick={e => this.props.onClick(e.target.name)}>.</Button>
            <Button className="btn" name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button>
            <Button className="btn" name="/" onClick={e => this.props.onClick(e.target.name)}>/</Button>
            <Button className="btn" name="*" onClick={e => this.props.onClick(e.target.name)}>x</Button>
            </KeyboardTop>

            <KeyboardBtm className="keyboard-btm">
            <ButtonBtm1  className="btm-btn res" name="res" onClick={e => this.props.onClick(e.target.name)}>Reset</ButtonBtm1>
            <ButtonBtm2 className="btm-btn equal" name="=" onClick={e => this.props.onClick(e.target.name)}>=</ButtonBtm2>
            </KeyboardBtm>
            </Container>
                
        );
};
};

export default Keypad
