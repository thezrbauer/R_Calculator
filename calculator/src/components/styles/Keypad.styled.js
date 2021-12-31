import styled from "styled-components"

export const Container = styled.div`
border-radius: 8px;
background-color:${({theme}) =>theme.colors.toggleBg};
box-shadow: 0 .8px 1.1px rgb(0 0 0 / 0.2)
`

export const KeyboardTop = styled.div`
display:grid;
grid-template-columns: repeat(4, 60px);
flex-wrap:wrap;
justify-content:center;
height:auto;
gap:18px;
padding:1rem;
`

export const KeyboardBtm = styled.div`
display:grid;
grid-template-columns: repeat(2, 120px);
flex-wrap:wrap;
justify-content:center;
height:auto;
gap:36px;
padding:0rem 1rem;
`


export const Button = styled.button`
background-color: ${({theme}) =>theme.colors.keybgtertiary};
color: ${({theme}) =>theme.colors.textcolor};
border: 1px ${({theme}) =>theme.colors.keyshadowtertiary} solid;
border-bottom:3px ${({theme}) =>theme.colors.keyshadowtertiary} solid;
height:40px;
width:65px;
border-radius: 6px;
font-size:20px;
`


export const ButtonBtm1 = styled.button`
background-color:  ${({theme}) =>theme.colors.keybgprimary};
border: 1px ${({theme}) =>theme.colors.keyshadowprimary} solid;
border-bottom: 3px ${({theme}) =>theme.colors.keyshadowprimary} solid;
font-size:20px;
height:40px;
width:143px;
border-radius: 6px;
margin-left:-9px;
margin-bottom:1rem;
color:white;


`

export const ButtonBtm2 = styled.button`
background-color:  ${({theme}) =>theme.colors.keybgsecondary};
border: 1px ${({theme}) =>theme.colors.keyshadowprimary} solid;
border-bottom: 3px ${({theme}) =>theme.colors.keyshadowsecondary} solid;
font-size:20px;
height:40px;
width:143px;
border-radius: 6px;
margin-left:-9px;
margin-bottom:1rem;
color:black;
`


export const ButtonOdd = styled.button`
background-color:  ${({theme}) =>theme.colors.keybgprimary};
border: 1px ${({theme}) =>theme.colors.keyshadowprimary} solid;
border-bottom: 3px ${({theme}) =>theme.colors.keyshadowprimary} solid;
color:white;
height:40px;
width:65px;
border-radius: 6px;
font-size:18px;
`