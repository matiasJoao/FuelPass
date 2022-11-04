import Icon from '../imagens/Group3.png'
import '../CSS/login.css'
import { Link } from 'react-router-dom'

export function Login() {
    return (
        <div className="principal">
            <header className="cabecalho">
                <img src={Icon}></img>
            </header>
            <div className="body">
                <h1> Login </h1>
                <div className="form">
                    <form>
                        <input className="input" id="email" placeholder="Email" type="email" required />
                        <br></br>
                        <input className="input" id="senha" placeholder="Senha" type="password" required />
                        <br></br>
                        <button className="btn"> Entrar </button>
                        <Link to="/Cadastro" ><p className="redirect">Cadastro</p></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}