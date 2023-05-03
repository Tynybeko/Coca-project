import React, { useEffect, useState } from 'react'
import './Main.scss'
import { CartContext } from '../context/CartContext';

import Header from './Header/Header';
import LeftMain from './LeftMain/LeftMain';
import Login from '../Login/Login';
import { CartContext2 } from '../context/CartContext2';
const Main = () => {

    const [myuser, setmyuser] = useState(JSON.parse(sessionStorage.getItem('user')) || 0)
    const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('changed')) || [])
   
    return (
        <CartContext.Provider value={[myuser, setmyuser]}>
            <CartContext2.Provider value={[cart, setCart]}>
                {
                    myuser ? <div className='Main'>
                        <Header />
                        <LeftMain />
                    </div >
                        : <Login />
                }
            </CartContext2.Provider>
        </CartContext.Provider>
    )
};

export default Main;

