import Icon from '../imagens/Group3.png'
import '../CSS/Cadastro.css'

export function Cadastro() {

    return (
        <div className="principal">
            <header className="cabecalho">
                <img src={Icon}></img>
            </header>
            <div className="body">
                <h1>Cadastro</h1>
                <div className="form">
                    <form>
                        <input className="input" id="nome" placeholder="Nome" type="text"  required/>
                        <br></br>
                        <input className="input" id="email" placeholder="Email" type="email" required />
                        <br></br>
                        <input className="input" id="senha" placeholder="Senha" type="password" minLength="8" required />
                        <br></br>
                        <input className="input" id="Confirmsenha" placeholder="Confirmar Senha" type="password" minLength="8" required />
                        <br></br>
                        <button className="btn"> Cadastrar </button>
                    </form>
                </div>
            </div>
        </div>
    )
}