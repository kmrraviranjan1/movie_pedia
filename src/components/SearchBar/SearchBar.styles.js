import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    align-items:center;
    height:100px;
    padding: 0 20px;
    background:var(--darkGrey)
`
export const Content = styled.div`
    position:relative;
    max-width:var(--max-width);
    width:100%;
    height:55px;
    margin:0 auto;
    border-radius:40px;
    background:var(--medGrey);
    color: var(--white);
    img{
        position:absolute;
        top:14px;
        left:15px;
        width:30px;
    }
    input{
        font-size:var(--fontBig);
        position:absolute;
        left:0;
        margin:8px 0;
        padding:0 0 0 60px;
        border:0;
        width:95%;
        height:40px;
        background:transparent;
        color:var(--white);
        :focus{
            outline:none;
        }
    }
`