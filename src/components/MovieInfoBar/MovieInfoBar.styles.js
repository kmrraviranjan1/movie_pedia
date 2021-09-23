import styled from "styled-components";
export const Wrapper=styled.div`
    display:flex;
 
    align-items:center;
    background:var(--darkGrey);
    min-height:100px;
    padding:0 20px;
`
export const Content=styled.div`
    display:flex;
    max-width:var(--max-width);
    width:100%;
    margin: 0 auto;
    .column{
        display:flex;
        justify-content:center;
        align-items:center;
        background:var(--medGrey);
        border-radius:20px;
        margin:0 20px;
        flex:1;
        :first-child{
            margin-left:0;
        }
        ::last-child{
            margin-right:0;
        }
        @media screen and (max-width:768px){
            display:block;
            margin: 20px 0;
        }
    }
`