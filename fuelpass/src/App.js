import logo from './logo.svg';
import './App.css';
import { Router } from './Rotas/Rotas'
import {PayPalScriptProvider} from '@paypal/react-paypal-js'
function App() {
  return (
    <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID, "currency": "BRL"}}> 
    <Router/>
    </PayPalScriptProvider>
    
  );
}

export default App;
