import React from 'react'
import './Main.scss'

import Header from './Header/Header';
import LeftMain from './LeftMain/LeftMain';
import Food from './Foods/Food';
const Main = () => {

    // console.log(Food.catID = 1);
    console.clear()
    return (
        <div className='Main'>
            <Header />
            <LeftMain />

        </div >
    )


};

export default Main;

