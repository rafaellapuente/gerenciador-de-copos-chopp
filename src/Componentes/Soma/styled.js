import styled from "styled-components";

export const Campo = styled.div`
    box-sizing: border-box;
    width:92px;
    border-radius:5px;
    border:1px solid #000;
    margin:5px 15px;
    .left{
        border-radius:5px 0 0 5px;
        background-color:#F00;
        &:hover{
            background-color:#F55;
        }
    }
    .right{
        border-radius:0 5px 5px 0;
        background-color:#0F0;
        &:hover{
            background-color:#5F5;
        }
    }
`
export const Input = styled.input`
    box-sizing: border-box;
    width:30px;
    padding:0;
    margin:0;
    border:0;
    height:29px;
    text-align:center;
    color:#000;
    background-color:#FFF;
`
export const Button = styled.button`
    margin:0;
    border:none;
    background-color:#DDD;
    height:30px;
    width:30px;
    cursor:pointer;
    font-weight:bold;
    font-size:14px;
    
`