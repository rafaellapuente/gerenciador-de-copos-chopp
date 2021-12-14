import React, {useEffect, useState} from 'react'
import { Campo,Input,Button,Area } from './styled'

function Nota (){
    const [number, setNumber] = useState(0)
    const [hora,setHora] = useState([])
    const [visible, setVisible] = useState(false)
    function pegarHora (){
        let Data = new Date();
        let H = Data.getHours();
        let M = Data.getMinutes();
        let S = Data.getSeconds();
        setHora([...hora,`${(H<10?'0'+H:H)}:${(M<10?'0'+M:M)}:${(S<10?'0'+S:S)}`])
        return
    }
    function removerHora(){
        if(hora.length === 1){
            
            return
        }else{
            let newArray = hora
            let newArrayPop = newArray.pop()
            console.log(newArrayPop)
            setHora([...newArray])
            return 
        }
    }
    
    let Menos= ()=>{
        let n= number
        if(number>0){
            setNumber(n-=1)
            removerHora()
            return
        }
    }
    let Somar= ()=>{
        let n= number
        if(number>=0){
            setNumber(n+=1)
            pegarHora()
            setVisible(true)
            return 
        }
    }
    useEffect(()=>{
        if(number === 0){
            setVisible(false)
            setHora([])
            return
        }
    },[number])
    let key = 1
    let keys = 500
    return(
        <Area>
            <Campo>
                <Button onClick={Menos} className='left'>-</Button>
                <Input type='text' value={number} disabled/>
                <Button onClick={Somar} className='right'>+</Button>
            </Campo>
            {visible &&
                <select key={keys+1}>
                    <option key={0} value='DEFAULT'>Hora</option>
                {
                    hora.map(
                        hora=><option key={key+1} disabled>{`${key++}º ${hora}`}</option>
                    )
                }
                </select>
            }
        </Area>
    )
}

export default Nota