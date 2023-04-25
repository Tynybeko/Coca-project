import React from 'react'
import LeftMain from '../LeftMain/LeftMain'

function Food({ catID, searchI }) {
    const FOODS = [
        {
            id: 1,
            title: 'Steak sapi bakar',
            price: 25.15,
            categoryId: 3,
            img: './media/Main/Foods/1.png'
        },
        {
            id: 2,
            title: 'Ayam kentang',
            price: 15.40,
            categoryId: 3,
            img: './media/Main/Foods/2.png'
        }, {
            id: 3,
            title: 'Ikan santan',
            price: 25.15,
            categoryId: 3,
            img: './media/Main/Foods/3.png'
        }, {
            id: 4,
            title: 'Mia kuah pedas',
            price: 25.15,
            categoryId: 3,
            img: './media/Main/Foods/4.png'
        }, {
            id: 5,
            title: 'Kuah santan',
            price: 25.15,
            categoryId: 3,
            img: './media/Main/Foods/5.png'
        }, {
            id: 6,
            title: 'Mie gepeng telor',
            price: 25.15,
            categoryId: 2,
            img: './media/Main/Foods/6.png'
        },
        {
            id: 5,
            title: 'Kuah santan',
            price: 25.15,
            categoryId: 3,
            img: './media/Main/Foods/5.png'
        },
    ]
    const [category, setCategory] = React.useState()
    const changeCat = () => {
        setCategory(catID)
    }
    const FILTER = FOODS.filter((element, elemetIndex) => element.categoryId == catID)


    return (
        <div className='food__items'>
            {
                FILTER.filter(item => item.title.toLowerCase().includes(searchI.toLowerCase())).map((item, index) => (
                    <div className="food">
                        <div className="food__img"><img src={item.img} alt="" />
                        </div>
                        <p className='food__name'>{item.title}</p>
                        <p className='food__price'>$<span>{item.price}</span></p>
                    </div>
                ))
            }


        </div>

    )
}

export default Food