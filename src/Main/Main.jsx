import React, { useState } from 'react'
import './Main.scss'
import { CartContext } from '../context/CartContext';

import Header from './Header/Header';
import LeftMain from './LeftMain/LeftMain';
// import Login from '../Login/Login';
const Main = () => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('changed')) ?? [])
    // const [a, b] = React.useState(false)

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

