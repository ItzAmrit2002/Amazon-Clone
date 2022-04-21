import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import {useNavigate} from 'react-router-dom'


function Subtotal() {
    const onClick = e => {
        e.preventDefault()
        if(user == null)
        {
            toast("Please Login or Register to Checkout", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
        else if(basket.length >=1)
        {
            navigate('/payment')
        }
        else {
            toast("Please add atleast 1 item to your cart", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
        // console.log(basket?.length())
    }
    const navigate = useNavigate();
    const [{basket, user}, dispatch] = useStateValue()
  return (
    <div className='subtotal'>
<CurrencyFormat
    renderText={(value) => (
        <>
        <p>
            Subtotal ({basket?.length} items): <strong>{value}</strong>
        </p>
        <small className='subtotal__gift'>
            <input type="checkbox"/> This Order contains a gift
        </small>
        </>
    )}
    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"₹"}
/>

<button onClick={onClick}>Proceed to Checkout</button>
<ToastContainer />
    </div>
  )
}

export default Subtotal