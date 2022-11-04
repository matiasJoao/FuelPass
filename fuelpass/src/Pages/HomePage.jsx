import Icon from '../imagens/Group3.png'
import '..//CSS/HomePage.css'
import { useState } from 'react'

export function HomePage() {

const [litros, setLitros] = useState('') 
const [real, setReal] = useState('')


    const preçoCombustivel = 6
   const ValorTotal = litros * preçoCombustivel
    const ValorTotal2 = real / preçoCombustivel

    
    return (
        <div className="principal">
            <header className="cabecalho">
                <img src={Icon}></img>
            </header>
            <div className="body">
            <div className="litros">
            <label for='litros'>Litros Para Real</label>
                <input type="number" id='litros' step="0.01"  placeholder="Digite a quantidade Desejada" className="input" onChange={(e)=> setLitros(e.target.value)} />
                <div className="">
                    <p>Total</p>
                  <p> R${ValorTotal}</p> 
                </div>
            </div>
            <div className="Real">
            <label for='real'>Real Para Litros</label>
                <input type="number" id="real" step="0.01"  placeholder="Digite o valor desejado" className="input" onChange={(e)=> setReal(e.target.value)} />
                <div className="">
                    <p>Total</p>
                  <p> {ValorTotal2} Litros</p> 
                </div>
            </div>
                
            </div>
        </div>
    )
}