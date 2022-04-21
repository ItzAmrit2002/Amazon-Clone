import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
  return (
      
    <div className='home'>
        
        <div className='home__container'>
            <img className='home__image' src="https://m.media-amazon.com/images/I/6189fbHGKXL._SX3000_.jpg"/>

            <div className='home__row'>
                <Product title="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5" price={2999} image="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" rating={5} id={1}/>
                <Product title="WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive" price={8299} image="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" rating={4} id={2}/>
            </div>
            <div className='home__row'>
                <Product title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" rating={3} price={4099} id={3}/>
                <Product title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)" price={3499} rating={5} image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg" id={5}/>
                <Product title="Wings Of Fire: An autobiography of A.P.J Abdul Kalam" price={299} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/51vgy3LMz6L._SX339_BO1,204,203,200_.jpg" id={4}/>
            </div>
            <div className='home__row'>
                <Product title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED" rating={4} price={23999} image="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" id={6}/>
            </div>
        </div>
    </div>

  )
}

export default Home