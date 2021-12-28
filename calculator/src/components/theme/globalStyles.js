import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  margin:0;
  padding:0;
  box-sizing: border-box;
}
*:focus {
  outline: 2px dashed hsl(220,98%, 61%, 0.2);
  outline-offset: 0;
}


h1 {
    font-size:40px;
}

h2 {
    font-size:32px;
    float:right;
    margin: 1rem;
  }

  h3 {
    font-size: 8px;
    margin:1rem 1rem;  
  }
  
  li {
    font-size:12px;
    display:inline;
    list-style:none;
  }


  justify-content: center;
  align-items:center;
  display: flex;
  flex-direction: column;
  margin:auto;
  

`