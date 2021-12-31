import styled from "styled-components"

export const Heading = styled.header`

color:${({theme}) => theme.colors.titlecolor};
display:flex;
justify-content: space-between;
margin: 2rem auto 0rem; 
width:325px
`

export const ToggleWrap = styled.header`
display:flex;
font-size: 0.35rem;
padding: 0.4em 1.75em;
text-transform: uppercase;

h3 {
    font-size:10px;
}

span {
    background-color: ${({theme})=> theme.colors.keybgsecondary};
    border-radius: 50%;
    height: 0.8rem;
    left: 0.15rem;
    position: absolute;
    top: 0.25rem;
    width: 0.8rem;
    z-index: -1;
}
`

export const ThemeLabel = styled.label`
font-size:9px;
text-align: center;
cursor: pointer;
flex-basis: 33.3%;
margin-top: -0.8rem;
`

export const ThemeInput = styled.input`
appearance: none;
border: 0 none;
outline: none;
-webkit-appearance: none;
-moz-appearance: none;
`

export const ToggleBox = styled.div`
background-color: ${({theme})=> theme.colors.toggleBg};;
border-radius: 1.5em;
display: flex;
font-size: 0.35rem;
padding: 0.05rem;
margin-top:.7rem;
position: relative;
width: 3rem;
height:1.3rem;
z-index: 1;
`