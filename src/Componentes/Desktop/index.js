import React,{useState} from 'react'
import {Area,AreaMenu,Temp,Header,Title,Body, Li} from './styled'
import Ficha from '../Ficha'
import './style.css'
import Logo from './menu-button.png'

function Desk (){
    const [modal,setModal]= useState(true)
    const [numeroFicha, setNumeroFicha]= useState('')
    const [menuPop, setMenuPop] = useState('false')
    const [pop, setPop] = useState('40')
    const [display, setDisplay] = useState('none')
    var ranger=[1]
    function Imprimir(n){
        
        for(let i = 2; i<=n; i++){
            ranger.push(i)
        }
        return ranger
    }
    let handleKeyPress = (event)=>{
        if(event.keyCode === 13 && numeroFicha !== ''){
            setModal(false)
            return
        }
    }
    let handleAdd = ()=>{
        setNumeroFicha(Number(numeroFicha) + 1)
        Imprimir(numeroFicha)
        return
    }
    let handleRemuve = ()=>{
        if(numeroFicha >= 2){
            setNumeroFicha(numeroFicha - 1)            
            return Imprimir(numeroFicha)
        }
        return
    }
    let handlePop = ()=>{
        if(menuPop===true){
            setMenuPop(false)
            setPop('40')
            setDisplay('none')
            return 
        }else{
            setMenuPop(true)
            setPop('')
            setDisplay('')           
            return
        }
    }
    
    Imprimir(numeroFicha)
    return(
        <Area tamanho={ranger.length <= 7 && '100vh'} className='area'>
            <Temp>
                {modal && <div className='modal--area'>
                        <div className='modal'>
                            <h3>Quantas fichas você deseja?</h3>
                            <div className='box--info'>
                                <input type='number' autoFocus onKeyUp={handleKeyPress} onChange={(e)=>setNumeroFicha(e.target.value)} value={numeroFicha} placeholder='Nº'/>
                                <button onClick={()=>setModal(false)}>GERAR</button>
                            </div>
                        </div>

                    </div>
                } 
                {!modal &&
                    <AreaMenu pop={pop}>
                        <div onClick={handlePop} className='areaLogo'>
                            <img src={Logo} alt=''/>
                        </div>
                        {
                            <div className='areaUl' pop={pop}>
                                <ul display={display}>
                                    <Li pop={pop} onClick={handleAdd}>Adicionar</Li>
                                    <Li pop={pop} onClick={handleRemuve}>Remover</Li>
                                </ul>
                            </div>
                        }
                        
                    </AreaMenu>
                }                               
                {!modal &&
                    
                    <Body>   
                        <Header>
                            <Title>Nº</Title>
                            <Title>PILSEN</Title>
                            <Title>IPA</Title>
                        </Header>
                        <hr/>
                        <Body>
                            {
                                ranger.map(
                                    ranger=><Ficha value={ranger} key={ranger}/>
                                )
                            }                            
                        </Body>
                    </Body>    
                }
            </Temp>
        </Area>
    )
}
export default Desk