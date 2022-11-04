import { BrowserRouter , Routes ,Route} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Cadastro } from '../Pages/Cadastro'


export function Router (){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>  
                <Route path="/login" element={<Login/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
            </Routes>
        </BrowserRouter>
    )

}