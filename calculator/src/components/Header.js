import React from 'react'
import { Heading, ToggleWrap, ToggleBox, ThemeLabel, ThemeInput } from './styles/Header.styled'

export default function Header() {
    return (
      <>
        <Heading>
        <h1>calc</h1>
        <ToggleWrap className="toggle-wrapper">
          <h3>THEME</h3>
          <div>
          <ToggleBox className="theme-toggle" >
          <ThemeLabel htmlFor="theme1">1</ThemeLabel>
          <ThemeInput id="theme1" type="radio" name="theme" value="0"  />
         
          <ThemeLabel htmlFor="theme2">2</ThemeLabel>
          <ThemeInput id="theme2" type="radio" value="1" name="theme"/>
         
          <ThemeLabel htmlFor="theme3">3</ThemeLabel>
          <ThemeInput id="theme3" type="radio" value="2" name="theme"/>
         <span className="indicator ind-1"></span>
         <span className="indicator ind-2"></span>
         <span className="indicator ind-3"></span>
          </ToggleBox>
          </div>
        </ToggleWrap>
        </Heading>
        </>
    )
        
}
 