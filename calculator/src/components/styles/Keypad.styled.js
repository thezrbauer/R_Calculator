import styled from "styled-components"

export const Container = styled.div`
border-radius: 8px;
background-color:yellow;
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
height:40px;
width:65px;
border-radius: 6px;
font-size:20px;
`


export const ButtonBtm = styled.button`
font-size:20px;
height:40px;
width:143px;
border-radius: 6px;
margin-left:-9px;
margin-bottom:1rem;
color:white;

Button {
// reset
}

`
export const ButtonOdd = styled.button`
color:white;
border-radius: 6px;


Button {
// equal
}
`