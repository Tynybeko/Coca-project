import React, { useState } from 'react'
import './Main.scss'
import { ReactComponent as SVG } from './media/coffee.svg';
import { ReactComponent as SVG1 } from './media/beverages.svg';
import { ReactComponent as SVG2 } from './media/food.svg';
import { ReactComponent as SVG3 } from './media/appetizer.svg';
import { ReactComponent as SVG4 } from './media/bread.svg';
import { ReactComponent as SVG5 } from './media/snack.svg';
import LeftMain from './LeftMainItem';
import Header from './Header/Header';
const Main = () => {
    let blockItems = [
        {
            id: 1,
            title: 'Coffee',
            img: <SVG />,
        },
        {
            id: 2,
            title: 'Beverages',
            img: <SVG1 />,
        },
        {
            id: 3,
            title: 'Food',
            img: <SVG2 />,
        },
        {
            id: 4,
            title: 'Appetizer',
            img: <SVG3 />,
        },
        {
            id: 5,
            title: 'Bread',
            img: <SVG4 />,
        },
        {
            id: 6,
            title: 'Snack',
            img: <SVG5 />,
        },
    ]



    return (
        <div className='Main'>
            <Header />
            <div className="left__main">
                {
                    blockItems.map((item, i) => (
                        <LeftMain item={item} i={i} />
                    ))
                }
            </div>
        </div >
    )


};

export default Main;

