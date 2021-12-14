import React from  'react'
import {Body,Input} from './styled'
import Soma from '../Soma'

function Ficha (props){
    return (
        <Body>
            <Input type='text' disabled value={props.value}/>
            <Soma/>
            <Soma/>
        </Body>
    )
}

export default Ficha