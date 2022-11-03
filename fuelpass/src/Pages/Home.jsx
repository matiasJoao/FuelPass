import react from 'react'
import '../CSS/Home.css'
import IconFuel from '../imagens/combustivel4.png'
import Vector from '../imagens/Vector.png'
export default function Home() {

    return (

        <div className="principal">
            <body>
                <header className="cabecalho">
                    <img src={IconFuel}></img>
                </header>
                <div className="body">
                    <img className="imgBody" src={Vector}></img>
                    <h1> Combustível sem <br></br>
                        sair de casa </h1>
                    <div className="links">
                        <a> <p  className="link link1">Bem Vindo De Volta! </p> </a>
                        <a> <p  className="link link2">Novo Aqui? </p> </a>
                    </div>
                </div>
            </body>
        </div>

    )
}