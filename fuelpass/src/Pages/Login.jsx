import Icon from '../imagens/Group3.png'
import '../CSS/login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

export function Login() {

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            navigate('/HomePage');
        }

        document.getElementById('forms').addEventListener("submit", async (e) => {
            e.preventDefault()

            const email = document.getElementById('email')
            const senha = document.getElementById('senha')

            let api = ``

        })

    })

    return (
        <div className="principal">
            <header className="cabecalho">
                <img src={Icon}></img>
            </header>
            <div className="body">
                <h1> Login </h1>
                <div className="form">
                    <form id="forms">
                        <input className="input" id="email" placeholder="Email" type="email" required />
                        <br></br>
                        <input className="input" id="senha" placeholder="Senha" type="password" required />
                        <br></br>
                        <button className="btn" type="submit"> Entrar </button>
                        <Link to="/Cadastro" ><p className="redirect">Cadastro</p></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}