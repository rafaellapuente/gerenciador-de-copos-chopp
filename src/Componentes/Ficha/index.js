import React, { useState } from  'react'
import {Body,Input, Area, Name} from './styled'
import Soma from '../Soma'

function Ficha (props){
    const [cor, setCor]= useState('')
    function feminino(){
        if(cor !== ''){
            setCor('')
            return
        }else {
            setCor('DC143C')
            return
        }
    }
    return (
        <Body>
            <Area  cor={cor}>
                <Input onClick={feminino} cor={cor} type='text'>{props.value}</Input>
                <Name type='text' cor={cor}/>
            </Area>
            <div className='teste'><Soma/></div>
            <Soma/>
        </Body>
    )
}

export default Ficha