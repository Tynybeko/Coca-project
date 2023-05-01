import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'

export default function Payment({ value }) {
    const [calcNum, setCalcNum] = React.useState('')
    const calculator = () => {
    }
    const handleChange = (event) => {
        setCalcNum(event.target.value)
        setError(false)
    }

    useEffect(() => {
        setError(false)
    }, [calcNum])
    const [add, setAdd] = React.useState(0)
    const [error, setError] = React.useState(false)
    const [cart, setCart] = useContext(CartContext)
    const getTotal = cart.reduce((acc, item) => acc += item.count * item.price, 0)
    const total = ((getTotal / 100 * 10) + getTotal).toFixed(2)
    const [checked, setCheck] = React.useState(value)
    return (
        <div className='Payment' style={{ display: checked ? 'block' : 'none' }}>


            <div className="order__confirm">
                <div className="inner">
                    <div className="title">
                        <h3>Order confirmation</h3>
                        <p>Please confirm the order below to completed payment</p>
                    </div>
                    <div className="desc">
                        <div className='head'>
                            <p className='first'>ITEM NAME</p>
                            <p style={{ textAlign: 'center' }}>QTY</p>
                            <p>PRICE</p>
                            <p>TAX</p>
                            <p>SUBTOTAL</p>
                        </div>
                        {
                            cart.map(item => (
                                <div>
                                    <p className='first'>{item.title}</p>
                                    <p style={{ textAlign: 'center' }}>{item.count}</p>
                                    <p>$ {item.price}</p>
                                    <p>$ {(((item.price * item.count) / 100 * 10)).toFixed(2)}</p>
                                    <p>$ {(((item.price * item.count) / 100 * 10) + (item.count * item.price)).toFixed(2)}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="notes">
                        <div className="desc">
                            <h4>NOTES</h4>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="pay__inner">
                <header>
                    <div className="title"><h2>Order payment</h2><svg onClick={() => {
                        setCheck(!checked)
                    }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5L19 19M19 5L5 19" stroke="#19191C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    </div>
                    <p>Order #102</p>
                </header>
                <body>
                    <div className="bill">
                        <p>Tip Amount<span>$ 0</span></p>
                        <p className='orange'>Total Amount<span>$ {total}</span></p>
                    </div>
                    <div className="paymentMethods">
                        <h4>Payment method</h4>
                        <div>
                            <button><img src="./media/payMethods/cash.png" alt="" /></button>
                            <button><img src="./media/payMethods/Visa.png" alt="" /></button>
                            <button><img src="./media/payMethods/master.png" alt="" /></button>
                            <button><img src="./media/payMethods/Logo.png" alt="" /></button>
                        </div>
                    </div>
                    <div className="inputamount">
                        <h4>Input amount</h4>
                        <input style={{ border: `${!error ? '1px solid #E4E4E4' : '1px solid red'}` }} onChange={handleChange} value={calcNum} placeholder='Input amount' type="text" />
                    </div>
                    <div className="calc">
                        <button onClick={() => setCalcNum(calcNum + 1)}>1</button>
                        <button onClick={() => setCalcNum(calcNum + 2)}>2</button>
                        <button onClick={() => setCalcNum(calcNum + 3)}>3</button>
                        <button onClick={() => setCalcNum(+calcNum + 10 + '')} className='blue'>10</button>
                        <button onClick={() => setCalcNum(calcNum + 4)}>4</button>
                        <button onClick={() => setCalcNum(calcNum + 5)}>5</button>
                        <button onClick={() => setCalcNum(calcNum + 6)}>6</button>
                        <button onClick={() => setCalcNum(+calcNum + 20 + '')} className='blue'>20</button>
                        <button onClick={() => setCalcNum(calcNum + 7)}>7</button>
                        <button onClick={() => setCalcNum(calcNum + 8)}>8</button>
                        <button onClick={() => setCalcNum(calcNum + 9)}>9</button>
                        <button onClick={() => setCalcNum(calcNum.slice(0, -1))} className='orange'><svg width="64" height="48" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.2443 14H28.2216C26.3197 14 23.9642 15.1657 22.8585 16.6534L18.9376 21.93L17.1363 24.3552C16.9546 24.608 16.9531 25.0659 17.1408 25.3143L18.9255 27.7179L22.86 33.0147C23.9642 34.501 26.3182 35.6667 28.2216 35.6667H43.2443C45.316 35.6667 47 34.046 47 32.0556V17.6111C47 15.6207 45.316 14 43.2443 14ZM39.7996 28.1454C39.9391 28.2796 40.0497 28.4388 40.1252 28.614C40.2007 28.7892 40.2395 28.977 40.2395 29.1667C40.2395 29.3563 40.2007 29.5441 40.1252 29.7193C40.0497 29.8946 39.9391 30.0538 39.7996 30.1879C39.6601 30.322 39.4945 30.4284 39.3123 30.501C39.1301 30.5735 38.9348 30.6109 38.7375 30.6109C38.5403 30.6109 38.3449 30.5735 38.1627 30.501C37.9805 30.4284 37.8149 30.322 37.6754 30.1879L34.2307 26.8758L30.786 30.1879C30.6468 30.3225 30.4813 30.4293 30.299 30.5022C30.1167 30.5751 29.9213 30.6126 29.7239 30.6126C29.5265 30.6126 29.331 30.5751 29.1487 30.5022C28.9664 30.4293 28.801 30.3225 28.6618 30.1879C28.5221 30.0539 28.4114 29.8947 28.3358 29.7194C28.2602 29.5442 28.2213 29.3564 28.2213 29.1667C28.2213 28.977 28.2602 28.7891 28.3358 28.6139C28.4114 28.4387 28.5221 28.2795 28.6618 28.1454L32.1065 24.8333L28.6618 21.5212C28.5223 21.3871 28.4116 21.2279 28.3362 21.0527C28.2607 20.8775 28.2218 20.6897 28.2218 20.5C28.2218 20.3103 28.2607 20.1225 28.3362 19.9473C28.4116 19.7721 28.5223 19.6129 28.6618 19.4788C28.8012 19.3447 28.9668 19.2383 29.1491 19.1657C29.3313 19.0931 29.5266 19.0558 29.7239 19.0558C29.9211 19.0558 30.1164 19.0931 30.2987 19.1657C30.4809 19.2383 30.6465 19.3447 30.786 19.4788L34.2307 22.7909L37.6754 19.4788C37.8149 19.3447 37.9805 19.2383 38.1627 19.1657C38.3449 19.0931 38.5403 19.0558 38.7375 19.0558C38.9348 19.0558 39.1301 19.0931 39.3123 19.1657C39.4945 19.2383 39.6601 19.3447 39.7996 19.4788C39.9391 19.6129 40.0497 19.7721 40.1252 19.9473C40.2007 20.1225 40.2395 20.3103 40.2395 20.5C40.2395 20.6897 40.2007 20.8775 40.1252 21.0527C40.0497 21.2279 39.9391 21.3871 39.7996 21.5212L36.3549 24.8333L39.7996 28.1454Z" fill="#EA4F3B" />
                        </svg>
                        </button>
                        <button onClick={() => setCalcNum('')}>C</button>
                        <button onClick={() => setCalcNum(calcNum + 0)}>0</button>
                        <button onClick={() => calcNum.length !== 0 ? (calcNum.indexOf('.') === -1 ? setCalcNum(calcNum + '.') : setCalcNum(calcNum)) : (calcNum.indexOf('.') !== -1 ? setCalcNum(calcNum) : setCalcNum('0.'))}>.</button>
                        <button onClick={() => add === 0 ? (setAdd(+calcNum), setCalcNum('')) : (setCalcNum((add + (+calcNum)) + ''), setAdd(0))} className='orange'>Add</button>
                        <button className='tip'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.11006 8.8658C3.39124 8.95302 3.69014 9 4 9C5.65685 9 7 7.65685 7 6C7 5.7078 6.95823 5.42536 6.88032 5.15832M3.11006 8.8658C3.15696 8.25584 3.21954 7.62264 3.29912 6.95365C3.40769 6.04091 4.34486 5.32182 5.51848 5.24315C5.98536 5.21185 6.43843 5.18357 6.88032 5.15832M3.11006 8.8658C2.94158 11.057 2.97548 12.9483 3.15084 15.1219M6.88032 5.15832C10.5606 4.94797 13.4659 4.94716 17.1203 5.1563M3.15084 15.1219C3.19957 15.7259 3.25923 16.3517 3.3285 17.0118C3.42612 17.942 4.37088 18.6849 5.56588 18.7642C6.01541 18.794 6.45241 18.821 6.8793 18.8452M3.15084 15.1219C3.42008 15.0426 3.70507 15 4 15C5.65685 15 7 16.3431 7 18C7 18.2935 6.95786 18.5771 6.8793 18.8452M6.8793 18.8452C10.5253 19.0516 13.4342 19.0519 17.1204 18.8442M17.1204 18.8442C17.5521 18.8199 17.9944 18.7927 18.4497 18.7627C19.6418 18.684 20.5866 17.9451 20.6853 17.0173C20.7557 16.3557 20.8148 15.7293 20.8621 15.1257M17.1204 18.8442C17.042 18.5764 17 18.2931 17 18C17 16.3431 18.3431 15 20 15C20.2997 15 20.5891 15.0439 20.8621 15.1257M20.8621 15.1257C21.0339 12.9343 21.05 11.0442 20.8833 8.86786M20.8833 8.86786C20.8367 8.26 20.7759 7.62981 20.7002 6.96448C20.5958 6.04691 19.6574 5.32059 18.4781 5.24115C18.0128 5.20981 17.5611 5.18153 17.1203 5.1563M20.8833 8.86786C20.604 8.95376 20.3074 9 20 9C18.3431 9 17 7.65685 17 6C17 5.70706 17.042 5.42394 17.1203 5.1563M6.01001 12H6.00001M18.01 12H18M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                            Tip amount</button>
                        <button className='tip'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.56588 17.7979C4.37088 17.7299 3.42612 17.0932 3.3285 16.2959C2.94056 13.1273 2.85423 11.8804 3.29912 8.67455C3.40769 7.89221 4.34486 7.27584 5.51848 7.20841C6.20614 7.1689 6.86383 7.135 7.5 7.10673M18.4497 17.7966C19.6418 17.7292 20.5866 17.0958 20.6853 16.3005C21.0825 13.0996 21.1214 11.8582 20.7002 8.68384C20.5958 7.89735 19.6574 7.27479 18.4781 7.2067C17.7921 7.1671 17.1356 7.13319 16.5 7.10497M7.5 7.10673V5.5C7.5 4.11929 8.61929 3 10 3H14C15.3807 3 16.5 4.11929 16.5 5.5V7.10497M7.5 7.10673C10.6871 6.96506 13.3338 6.96438 16.5 7.10497M7.5 14H8.5M8.5 14L7.90765 18.1465C7.6925 19.6525 8.86115 21 10.3825 21H13.6175C15.1388 21 16.3075 19.6525 16.0924 18.1464L15.5 14M8.5 14H15.5M15.5 14H16.5M14.5 10.5H16.5" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                            Gift receipt</button>
                        <button className='tip'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.29912 6.59319C3.40769 5.61526 4.34486 4.8448 5.51848 4.76051C10.3428 4.41402 13.6924 4.41302 18.4781 4.75838C19.6574 4.84349 20.5958 5.62169 20.7002 6.6048C21.1214 10.5728 21.0825 13.3744 20.6853 17.3756C20.5866 18.3697 19.6418 19.1615 18.4497 19.2457C13.65 19.5849 10.3044 19.5841 5.56588 19.2474C4.37088 19.1624 3.42612 18.3664 3.3285 17.3698C2.94056 13.4091 2.85423 10.6005 3.29912 6.59319Z" stroke="white" stroke-width="1.5" />
                            <path d="M6 8L10.3107 11.9515C11.2665 12.8276 12.7335 12.8276 13.6893 11.9515L18 8" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        </svg>Email</button>
                        <button onClick={() => {
                            if (total > +calcNum) {
                                setError(true)
                            }
                        }} className='tip'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 11.8743L9.18415 17.683C9.26315 17.7715 9.40471 17.7725 9.48506 17.6851L20 6.25" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            Done</button>
                    </div>
                </body>
            </div >
        </div >
    )
}
