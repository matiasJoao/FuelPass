 import Icon from '../imagens/Group3.png'
 import '../CSS/login.css'

 export function Login(){
    return (
        <div className="principal">
            <header className="cabecalho">
                    <img src={Icon}></img>
            </header>
            <div className="body">
                <form>
                    <input className="input" id="email" placeholder="Email" type="email" /> 
                    <input className="input" id="senha" placeholder="Senha" type="password" /> 
                </form>
            </div>
        </div>
    )
 }