import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
function Payment() {
    
    const [{basket, user}, dispatch] = useStateValue()
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (
                    <Link to='/checkout'>
                        {basket?.length} items
                    </Link>
                )
            </h1>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>1b/2, Tp Lane, S J P Road</p>
                    <p>Bangalore, Karnataka</p>
                    <p>PIN CODE-560002</p>
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery.</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
            <div className='payment__section'>
                <div className='payment__section'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    {/* Stripe code will go here*/}
                    <form >
                                

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                    />
                                    <button >
                                        <span>Buy Now</span>
                                    </button>
                                </div>

                                  {/* Errors */}
                                
                            </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment