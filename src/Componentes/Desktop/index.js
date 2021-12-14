import React from 'react'
import {Temp,Header,Title,Body} from './styled'
import Ficha from '../Ficha'

function desk (){

    return(
        <Temp>
            <Header>
                <Title>Nº</Title>
                <Title>...</Title>
                <Title>...</Title>
            </Header>
            <Body>
                <Ficha value={0}/>
            </Body>
        </Temp>
    )
}
export default desk