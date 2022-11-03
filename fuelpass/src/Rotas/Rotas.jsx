import { BrowserRouter , Routes ,Route} from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'



export function Router (){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>  
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )

}