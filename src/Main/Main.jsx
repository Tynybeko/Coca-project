import React, { useState } from 'react'
import './Main.scss'
import { CartContext } from '../context/CartContext';

import Header from './Header/Header';
import LeftMain from './LeftMain/LeftMain';
const Main = () => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('changed')) || [])

    console.clear()
    return (
        <CartContext.Provider value={[cart, setCart]}>
            <div className='Main'>
                <Header />
                <LeftMain />
            </div >
        </CartContext.Provider>
    )
};

export default Main;

