import React from 'react'
import { Heading } from './styles/Header.styled'

export default function Header() {
    return (
      <>
        <Heading>
        <h1>calc</h1>
        <div className="toggle-wrapper">
          <h3>THEME</h3>
          
          <ul className="theme-toggle" >
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        </Heading>
        </>
    )
    
}
 