import React from 'react'

export default function Payment({ value }) {
    const [calcNum, setCalcNum] = React.useState()
    const calculator = () => {

    }

    const [active, setActive] = React.useState(value)
    return (
        <div className='Payment' style={{ display: active ? 'block' : 'none'}}>
            <div className="pay__inner">
                <header>
                    <div className="title"><h2>Order payment</h2><svg onClick={() => {
                        setActive(!active)
                    }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5L19 19M19 5L5 19" stroke="#19191C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    </div>
                    <p>Order #102</p>
                </header>
                <body>
                    <div className="bill">
                        <p>Tip Amount<span>$ 0</span></p>
                        <p className='orange'>Total Amount<span>$ 0</span></p>
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
                        <input value={calcNum} placeholder='Input amount' type="text" />
                    </div>
                    <div className="calc">

                    </div>
                </body>
            </div>
        </div>
    )
}
