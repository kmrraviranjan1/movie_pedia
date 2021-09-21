import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
:root{
    --max-width:1280px;
    --white:#fff;
    --lightGrey:#eee;
    --midGrey:#353535
    --darkGrey:#1c1c1c;
    --fontSuperBigh:2.5rem;
    --fontBig:1.5rem;
    --fontMid:1.2rem;
    --fontSmall:1rem;
}
*{
    box-sizing:border-box;
    font-family:'Abel',sans-serif;
}
body{
    margin:0;
    padding:0;
    h1{
        font-size:2rem;
        font-weight:600;
        color:var(--white)
    }
    h1{
        font-size:1.2rem;
        font-weight:600;
        
    }
    p{
        font-size:1 rem;        
        color:var(--white)
    }
}
`