import styled from "styled-components";

export const Area = styled.div`
    display:block;
    height:${props=>props.tamanho || 'auto'};
    width:100%;
    background-color:#EEE;
    margin:0;
    padding:0;
    position:absolute;
    top:0;
    left:0;
    
`

export const Temp = styled.div`
    box-sizing: border-box;
    display:flex;
    flex-direction:column;
    width:366px;
    background-color:#999;
    margin:5px auto;
    padding:0px 5px;
    border:1px solid rgba(0,0,0,0.5);
    border-radius:15px;
    box-shadow: 0px 0px 6px 1px #999;

    .modal--area{
        width:100vw;
        height:100vh;
        position:absolute;
        background-color:rgba(0,0,0,0.9);
        margin:0;
        top:0;
        left:0;

        .modal{
            width:300px;
            height:100px;
            background-color:#DDD;
            margin:50px auto;
            border-radius:5px;
            box-shadow: 0px 0px 6px 2px #AAA;
            display:flex;
            flex-direction:column;
            justify-content:flex-initial;
            align-item:center;
            h3{
                text-align:center;
                padding:0;
                margin:11px auto;
            }
            
            .box--info{
                display:flex;
                justify-content:center;

                input{
                    height:32px;
                    width:50px;
                    padding:0px;
                    padding-left:2px;
                    border-radius:15px;
                    border:0;
                    outline:none;               
                }
                button{
                    height:32px;
                    width:70px;
                    margin-left:5px;
                    font-weight:bold;
                    cursor:pointer;
                    border-radius:15px;
                    border:0.5 solid #000;
                    &:hover{
                        text-shadow: 3px 2px 3px #AAA;
                    }
                }
            }
        }
    }
`
export const Header=styled.div`
    display:flex;
    margin-top:5px;
    padding:0px 0px;
`
export const Title=styled.h1`
    box-sizing: border-box;
    margin:5px 15px;
    padding:7px 0;
    font-size:15px;
    height:32px;
    width:92px;
    background-color:#555;
    color:#FFF;
    text-align:center; 
    border-radius:5px 5px 0px 0px;
    box-shadow: 0px 0px 7px 3px #555;
    border:1px solid #000;
     .cor{
         backgournd-color:${props=>props.back};
     }
`
export const Body = styled.div`
    tranition: all ease .5s;
    hr{
        border-color:#999;
    }
`
export const AreaMenu = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:${props=>props.pop || '200'}px;
    height:${props=>props.pop || '144'}px;
    text-align:center;
    border-radius:25px;
    background-color:#555;
    position:fixed;
    left:64%;
    box-shadow: 0px 0px 6px 2px #555;
    transition:all ease .6s;

    ul{
        display:${props=>props.display || 'list-items'};
        text-align:center;
        overflow:hidden;
        list-style: none;
        text-align:left;
        padding:0px;
        margin:0;
        max-height:100px;
        max-width:200px;
    }
    
    .areaLogo{
        cursor:pointer;
    }

    img{
        width:25px;
        height:25px;
        margin-top:7px;
        cursor:pointer;        
    }

    .areaUl{
        display:flex;
        align-items:center;
        justify-content:center;
        overflow:hidden;
        max-width:${props=>(props.pop=== '40'?'0':'200')}px;
        transition:all ease .6s;
    }
`
export const Li = styled.li `
    display:block;
    overflow:hidden;
    background-color:#999;
    margin:5px;
    height:30px;
    padding:0 43px;
    max-width:${props=>(props.pop=== '40'?'0':'185')}px;
    max-height:${props=>(props.pop=== '40'?'0':'200')}px;
    font-size:25px;
    text-align:center;            
    border-radius:20px;
    border:2px solid #000;
    cursor:pointer;
    transition:all ease .5s;

    
    &:hover{
        background-color:#AAA;
        box-shadow: 0px 0px 6px 1px #000;   
    }


`