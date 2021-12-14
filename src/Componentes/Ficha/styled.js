import styled from "styled-components";

export const Body = styled.div`
    display:flex;
    align-flex:flex-start;
    margin:10px 0px;
    padding:5px 0px;
    border:1px solid #000;
    border-radius:15px;
    background-color:#AAA;
    transition:all ease .5s;
    box-shadow: 0px 0px 6px 1px #555;

`
export const Input = styled.div`
    display:flex;
    justify-content:center;
    align-items:center; 
    color:#FFF; 
    background-color:#${(props)=>props.cor || 555};
    width:80px;
    height:25px;
`
export const Area= styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    box-sizing: border-box;
    width:92px;
    padding:0;
    margin:5px 15px;
    margin-right:16px;
    background-color:#${(props)=>props.cor || 555};
    border-radius:5px;
    border:1px solid #000;
    font-size:15px;
    font-weight:bold;
    user-select:none;
`
export const Name = styled.input`
    width:70px;
    background-color:#${(props)=>props.cor || 555};
    border:0;
    color:#FFF;
    outline:none;
    text-align:center;
    text-transform: uppercase;
    &::placeholder{
        color:#FFF;
    }
`