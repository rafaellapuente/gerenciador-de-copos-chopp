import React, {useState} from 'react'
import { Campo,Input,Button } from './styled'

function Nota (){
    const [number, setNumber] = useState(0)
    let Menos= ()=>{
        let n= number
        if(number>0){
            return setNumber(n-=1)
        }
    }
    let Somar= ()=>{
        let n= number
        if(number>=0){
            return setNumber(n+=1)
        }
    }
    return(
       <Campo>
           <Button onClick={Menos} className='left'>-</Button>
           <Input type='text' value={number} disabled/>
           <Button onClick={Somar} className='right'>+</Button>
       </Campo>
       
    )
}

export default Nota