import {PayPalButtons} from '@paypal/react-paypal-js'
import { useState } from 'react'

const PaypalCheckoutButton = (props) =>{
    const [paid, setPaid] = useState(false)
    const {product} = props
    const handleApprove = (orderId) =>{


        setPaid(true)
    }
    return(
        <PayPalButtons 
        createOrder={(data, actions)=>{
            return actions.order.create({
                purchase_units :[{
                    description: product.description,
                    amount: {
                        value: product.price
                    }
                }]
            })
        }}
        onApprove={async (data, actions)=>{
            const order = await actions.order.capture()
            console.log(order, 'order')
            handleApprove(data.orderIDs)
        }}
        onError={(err)=>{
            console.error(err)
        }}
        />
    )
}
export default PaypalCheckoutButton