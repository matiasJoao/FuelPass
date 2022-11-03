import react from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Home.css'
import IconFuel from '../imagens/combustivel4.png'
import Vector from '../imagens/Vector.png'




export  function Home() {

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
                        <Link to="/login"><p  className="link link1">Bem Vindo De Volta! </p></Link>
                        <Link><p  className="link link2">Novo Aqui? </p></Link>
                    </div>
                </div>
            </body>
        </div>
    )

}