import React, { useEffect } from 'react'
import { ReactComponent as Home } from './media/home.svg';
import { ReactComponent as Bills } from './media/bills.svg';
import { ReactComponent as Order } from './media/order.svg';
import { ReactComponent as History } from './media/history.svg';
import { ReactComponent as Customer } from './media/customer.svg';

function Header() {
    const [time, setTime] = React.useState(new Date())
    let ii = time.toLocaleString().split(',')
    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 1000)
    }, [time])


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
        }, {
            id: 5,
            title: 'Customers',
            img: <Customer />
        },

    ]

    return (
        <header>
            <div className="left__header">
                <svg className='back_arrow' width="100" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9166 13.4166L11.4512 17.8821C11.3861 17.9472 11.3861 18.0527 11.4512 18.1178L15.9166 22.5833M11.4023 18H24.6666" stroke="#19191C" stroke-width="1.5" stroke-linecap="round" />
                    <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#E4E4E4" />
                </svg>
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
                        <a>{item.img}
                            {item.title}</a>
                    ))
                    }
                </nav>
                <div className="userOptions">
                    <button>Dinning option</button>
                    <div className='date'>{ii[1]}  {ii[0]}</div>
                    <div className="userImg"></div>
                </div>
            </div>
        </header>
    )
}

export default Header


