import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartContext2 } from '../context/CartContext2';



function FoodItem() {
    const [cart, setCart] = useContext(CartContext2);
    return (
        <div>
            {cart.map((item, idx) => <div className="items" key={idx}>
                <img aliggn='top' height={'68px'} width={'74px'} src={item.img} alt="food" />
                <div className='desc'>
                    <h4>{item.title}</h4>
                    <div className="jc">
                        <div className="left">
                            <p>Price</p>
                            <h5>$ <span>{item.price}</span></h5>
                        </div>
                        <div className="right">
                            <button onClick={() => {
                                item.count !== 1 ? item.count -= 1 : cart.splice(idx, 1)
                                sessionStorage.setItem('changed', JSON.stringify(cart))
                                setCart(JSON.parse(sessionStorage.getItem('changed')))
                            }} className="minus"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="18" fill="#E4E4E4" />
                                    <path d="M12.1667 18H23.8334" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </button>
                            <p>{item.count}</p>
                            <button onClick={() => {
                                item.count += 1
                                sessionStorage.setItem('changed', JSON.stringify(cart))
                                setCart(JSON.parse(sessionStorage.getItem('changed')))
                            }} className="plus"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="36" height="36" rx="18" fill="#19191C" />
                                    <path d="M12.1667 18.0001H23.8334M18.0001 12.1667V23.8334" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}


export default FoodItem