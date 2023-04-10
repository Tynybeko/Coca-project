import React from 'react'
import { ReactComponent as SVG } from '../media/coffee.svg';
import { ReactComponent as SVG1 } from '../media/beverages.svg';
import { ReactComponent as SVG2 } from '../media/food.svg';
import { ReactComponent as SVG3 } from '../media/appetizer.svg';
import { ReactComponent as SVG4 } from '../media/bread.svg';
import { ReactComponent as SVG5 } from '../media/snack.svg';

function LeftMain({newClass}) {
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
    return (
        <div id='left__main' style={{display: `${newClass}`}} className={`left__main`}>
            {
                blockItems.map((item, index) => (
                    <div key={index} onClick={() => handleClick(index)} className={`block ${selected === index ? 'active' : ''}`}>
                        {item.img}
                        {item.title}
                    </div>
                ))
            }
        </div>
    )
}

export default LeftMain