import Icon from '../imagens/Group3.png'
import '../CSS/HomePage.css'
import { useState, useEffect, useRef} from 'react'
import PaypalButton from '../components/paypal'

export function HomePage() {

    const [litros, setLitros] = useState('')
    const [real, setReal] = useState('')
    

    const preçoCombustivel = 6
    const ValorTotal = litros * preçoCombustivel
    const ValorTotal2 = real / preçoCombustivel

  var price = Number(ValorTotal)
    console.log(price, 'valor do preço')

    const product = {
        price: price,
        description: "(:"
    }
    console.log(product.price, 'valor')
  
   


    return (
        <div className="principal">
            <header className="cabecalho">
                <img src={Icon}></img>
            </header>
            <div className="body d">
                <div className="litros">
                    <label hhtmlFor='litros'>Litros Para Real</label>
                    <input type="number" id='litros'  placeholder="Digite a quantidade Desejada" className="input" onChange={(e) => setLitros(e.target.value)} />
                    <div className="valores">
                        <p className="pV">Total</p>
                        <p className="pV"> R${ValorTotal}</p>
                        <div className='paypalbutton'>
                            <PaypalButton product={product}/>
                        </div>
                    </div>
                </div>
                <div className="Real">
                    <label htmlFor='real'>Real Para Litros</label>
                    <input type="number" id="real"  placeholder="Digite o valor desejado" className="input" onChange={(e) => setReal(e.target.value)} />
                    <div className="valores">
                        <p className="pV">Total</p>
                        <p className="pV">  {ValorTotal2} Litros</p>
                    </div>
                </div>

            </div>
        </div>
    )
    }