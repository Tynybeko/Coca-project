import React, { useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartContext2 } from '../../context/CartContext2'

function Food({ catID, searchI }) {
    const FOODS = [
        {
            id: 1,
            title: 'Steak sapi bakar',
            price: 25.15,
            categoryId: 2,
            img: './media/Main/Foods/1.png',
            count: 1
        },
        {
            id: 2,
            title: 'Ayam kentang',
            price: 15.40,
            categoryId: 2,
            img: './media/Main/Foods/2.png',
            count: 1
        }, {
            id: 3,
            title: 'Ikan santan',
            price: 25.15,
            categoryId: 2,
            img: './media/Main/Foods/3.png',
            count: 1,
        }, {
            id: 4,
            title: 'Mia kuah pedas',
            price: 25.15,
            categoryId: 2,
            img: './media/Main/Foods/4.png',
            count: 1
        }, {
            id: 5,
            title: 'Kuah santan',
            price: 25.15,
            categoryId: 2,
            img: './media/Main/Foods/5.png',
            count: 1
        }, {
            id: 6,
            title: 'Mie gepeng telor',
            price: 25.15,
            categoryId: 2,
            img: './media/Main/Foods/6.png',
            count: 1
        },
    ]
    const [cart, setCart] = React.useContext(CartContext2)
    const FILTER = FOODS.filter((element, elemetIndex) => element.categoryId === catID)
    // useEffect(() => {
    //     localStorage.setItem('changed', JSON.stringify(cart))
    // }, [cart])
    return (
        <div className='food__items'>
            {
                FILTER.filter(item => item.title.toLowerCase().includes(searchI.toLowerCase())).map((item, index) => (
                    <div onClick={() => {
                        console.clear()
                        let i = cart.find(elem => elem.id === item.id)
                        if (i === undefined) {
                            sessionStorage.setItem('changed', JSON.stringify([...cart, item]))
                            setCart(JSON.parse(sessionStorage.getItem('changed')))
                        } else {
                            i['count'] = i.count + 1
                            cart.map(item2 => item2.id === item.id ? item2 = i : item2)
                            sessionStorage.setItem('changed', JSON.stringify(cart))
                            setCart(JSON.parse(sessionStorage.getItem('changed')))
                        }
                    }} className="food">
                        <div className="food__img"><img src={item.img} alt="" />
                        </div>
                        <p className='food__name'>{item.title}</p>
                        <p className='food__price'>$<span>{item.price}</span></p>
                    </div>
                ))
            }


        </div >

    )
}

export default Food