import React, { useContext } from 'react'
import { ReactComponent as SVG } from '../media/coffee.svg';
import { ReactComponent as SVG1 } from '../media/beverages.svg';
import { ReactComponent as SVG2 } from '../media/food.svg';
import { ReactComponent as SVG3 } from '../media/appetizer.svg';
import { ReactComponent as SVG4 } from '../media/bread.svg';
import { ReactComponent as SVG5 } from '../media/snack.svg';
import Food from '../Foods/Food'
// import { CartContext } from '../../context/CartContext'
import FoodItem from '../FoodItem';
import { CartContext } from '../../context/CartContext';
import Payment from '../Pay/Payment';
import { act } from 'react-dom/test-utils';


function getTotal(arr) {
    let total = arr.reduce((acc, item) => acc += item.price * item.count, 0)
    return total
}

function LeftMain() {

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

    const [selected, setSelected] = React.useState(0);
    const handleClick = (index) => {
        setSelected(index);
    }
    const [isChecked, setIsChecked] = React.useState(false);
    const handleToggle = () => {
        setIsChecked(!isChecked);
    }
    const [active, setActive] = React.useState(false)
    const [search, setSearch] = React.useState('')
    console.log(active);
    const handleChange = (event) => {
        setTimeout(() => {
            setSearch(event.target.value)
        }, 300)
    }
    const [cart, setCart] = useContext(CartContext)
    return (
        <div className="body">
            <div id='left__main' className='left__main'>
                {
                    blockItems.map((item, index) => (
                        <div key={index} onClick={() => handleClick(index)} className={`block ${selected === index ? 'active' : ''}`}>
                            {item.img}
                            {item.title}
                        </div>
                    ))
                }
            </div>
            <div className="main">
                <div className="main__header">
                    <div className="search__menu"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3556 17.3658C18.8279 15.8961 19.7388 13.8641 19.7388 11.6194C19.7388 7.13518 16.1036 3.5 11.6194 3.5C7.13518 3.5 3.5 7.13518 3.5 11.6194C3.5 16.1036 7.13518 19.7388 11.6194 19.7388C13.8589 19.7388 15.8866 18.8321 17.3556 17.3658ZM17.3556 17.3658L20.5 20.5" stroke="#19191C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                        <input placeholder='Search menu' type="text" onChange={handleChange} />

                    </div>

                </div>
                <Food catID={selected} searchI={search} />
            </div>
            {
                active ? <Payment value={active} /> : null
            }
            <section className="right__main">
                <div className="head">
                    <label htmlFor="switch__btn"><input type="checkbox" checked={isChecked} onChange={handleToggle} id='switch__btn' className='switch__btn' />
                        {isChecked ? <p>Buy</p> : null}
                        <span>{isChecked ? 'Reservation' : 'Buy'}</span>
                        {isChecked ? null : <p>Reservation</p>}
                    </label>
                    <div className="customer__form">
                        <h2>Customer Information</h2>
                        <input className='custom__name' placeholder='Customer name' type="text" />
                        <div>
                            <button><span>Select table</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.75 20.5L16.1086 12.1414C16.1867 12.0633 16.1867 11.9367 16.1086 11.8586L7.75 3.5" stroke="#19191C" stroke-width="1.5" stroke-linecap="round" />
                            </svg></button>
                        </div>
                        <button className='add__note'>Add note</button>
                    </div>
                </div>
                <hr />
                <div className="body">
                    <h2>Orders details</h2>
                    <div className="changedFood">
                        <FoodItem />
                    </div>
                    <hr />
                </div>
                <div className="foot">
                    <div className='cont'>
                        <p>Sub Total<span>$ {(getTotal(cart)).toFixed(2)}</span></p>
                        <p>Tax (10%)<span>$ {((getTotal(cart) / 100 * 10)).toFixed(2)}</span></p>
                        <div></div>
                        <p className='orange'>Total<span>$ {((getTotal(cart) / 100 * 10) + getTotal(cart)).toFixed(2)}</span></p>
                    </div>
                    <button onClick={() => {
                        setActive(!active)
                    }}>Pay Now</button>
                </div>
            </section>
        </div>
    )
}

export default LeftMain