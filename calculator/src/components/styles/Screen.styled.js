import styled from 'styled-components'

export const Form = styled.form`
background-color:${({theme}) => theme.colors.ScreenBg};
color:${({theme}) => theme.colors.titlecolor};
margin:1rem;
width:325px;
height:4.5rem;
border-radius: 6px;
overflow:hidden;
box-shadow: 0 .8px 1.1px rgb(0 0 0 / 0.2)
`