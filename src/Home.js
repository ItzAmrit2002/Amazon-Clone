import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src="https://m.media-amazon.com/images/I/61WLOpMnNSL._SX3740_.jpg"/>

            <div className='home__row'>
                <Product title="The lean startup" price={399} image="https://books.google.co.in/books/content?id=19forYX7NLQC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2tSLRMY_UIIcdx8YBezIlpoYgFBw&w=1280" rating={5}/>
                <Product/>
            </div>
            <div className='home__row'>
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div className='home__row'>
                <Product/>
            </div>
        </div>
    </div>

  )
}

export default Home