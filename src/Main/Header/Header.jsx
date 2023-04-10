import React from 'react'
import { ReactComponent as Home } from './media/home.svg';
import { ReactComponent as Bills } from './media/bills.svg';
import { ReactComponent as Order } from './media/order.svg';
import { ReactComponent as History } from './media/history.svg';

function Header({click}) {
    const headerItems = [
        {
            id: 1,
            title: 'Home',
            img: <Home />
        }, {
            id: 2,
            title: 'Order',
            img: <Order />
        }, {
            id: 3,
            title: 'History',
            img: <History />
        }, {
            id: 4,
            title: 'Bills',
            img: <Bills />
        },
    ]

    const [selected, setSelected] = React.useState(0);

    const handleClick = (index) => {
        setSelected(index);
    }

    const [main , setMain] = React.useState(false)

    const inputClick = () => {
        setMain(!main);
        click = main
    }
    console.clear()
    console.log(main);

    return (
        <header>
            <div className="left__header">
                <label  htmlFor="check-main" className='btn-main'>
                    <input onClick={inputClick} type="checkbox" id='check-main' className='check-main' />
                    <span></span></label>
                <div className="column"></div>
                <img src="/media/Main/logo.svg" alt="Logo" />
                <div className="title">
                    <h3><b>Walk-In</b></h3>
                    <p>Coca coffeetalk</p>
                </div>
            </div>
            <div className="right__header">
                <nav className="link">
                    {headerItems.map((item, index) => (
                        <a href="#" key={index} onClick={() => handleClick(index)} className={selected === index ? 'active' : ''}>
                            {item.img}
                            {item.title}</a>
                    ))
                    }
                </nav>
                <div className="userOptions">
                    <button>Dinning option</button>
                    <div className='date'>10:53:00  26/02/2023</div>
                    <div className="userImg"></div>
                </div>
            </div>
        </header>
    )
}

export default Header