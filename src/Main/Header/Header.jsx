import React from 'react'

function Header() {
    return (
        <header>
            <div className="left__header">
                <label htmlFor="check-main" className='btn-main'>
                <input type="checkbox" id='check-main' className='check-main' />
                    <span></span></label>
                {/* <svg width="120" height="44" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9166 13.4166L11.4512 17.8821C11.3861 17.9472 11.3861 18.0527 11.4512 18.1178L15.9166 22.5833M11.4023 18H24.6666" stroke="#19191C" stroke-width="1.5" stroke-linecap="round" />
                    <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#E4E4E4" />
                </svg> */}
                <div className="column"></div>
                <img src="/media/Main/logo.svg" alt="Logo" />
                <div className="title">
                    <h3><b>Walk-In</b></h3>
                    <p>Coca coffeetalk</p>

                </div>
            </div>
            <div className="right__header">
                <nav className="link">

                    <a href=""><svg className='homesvg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.95353 8.61072L10.4175 3.54689C11.3483 2.8177 12.6517 2.8177 13.5825 3.54689L20.0465 8.61072C20.7843 9.18877 20.9893 10.0491 20.9996 11.0435C21.0001 11.0974 20.9984 11.1495 20.9943 11.2033C20.9525 11.7548 20.6634 15.1249 19.5949 18.9084C19.2173 19.9615 18.3289 21 17.1067 21H15.918C15.1777 21 14.4713 20.3956 14.4713 19.65L14.5776 16.846C14.5776 15.4122 13.4236 14.2498 12 14.2498C10.5764 14.2498 9.42239 15.4122 9.42239 16.846L9.54168 19.65C9.54168 20.3956 8.82229 21 8.08203 21H6.89335C5.6711 21 4.78269 19.9615 4.40511 18.9084C3.33663 15.1249 3.0475 11.7548 3.00568 11.2033C3.0016 11.1495 2.99986 11.0974 3.00041 11.0435C3.01068 10.0491 3.21566 9.18877 3.95353 8.61072Z" fill="#FF5C00" />
                    </svg>
                        Home</a>
                    <a href=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 20.9617C11.4757 21.0582 9.16166 20.9724 6.23865 20.7048C5.19543 20.6092 4.36239 19.736 4.26588 18.6277C3.87042 14.0861 3.94716 10.903 4.292 6.41419C4.37877 5.28469 5.21856 4.38258 6.28078 4.28634C10.4928 3.90469 13.4667 3.9038 17.7331 4.28821C18.7928 4.38368 19.6326 5.28098 19.7203 6.4076C19.9822 9.77112 20.0688 12.3867 19.9433 15.3485M14 20.9617L19.9433 15.3485M14 20.9617V17.8485C14 16.4678 15.1193 15.3485 16.5 15.3485H19.9433M8 3V5.5M16 3V5.5" stroke="#828487" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M8 9.5H16" stroke="#828487" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M8 13H13" stroke="#828487" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                        Order</a>
                    <a href=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="#828487" stroke-width="1.5" />
                        <path d="M12 6.5V11.9586C12 11.9851 11.9895 12.0105 11.9707 12.0293L9 15" stroke="#828487" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                        History</a>
                    <a href=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5 3C19.4665 3 20.5 3.5 20.5 4.78736V9.10674C20.5 9.38877 20.2761 9.61741 20 9.61741H17M18.5 3C17.5335 3 17 3.80023 17 4.78736V9.61741M18.5 3H6C4.61929 3 3.5 4.14318 3.5 5.55337V19.6891C3.5 20.1142 3.98497 20.3505 4.31235 20.085L5.63161 19.0149C5.83843 18.8471 6.13841 18.872 6.3156 19.0716L7.87835 20.8322C8.07697 21.0559 8.42303 21.0559 8.62165 20.8322L10.1284 19.1347C10.327 18.911 10.673 18.911 10.8716 19.1347L12.3293 20.777C12.5445 21.0194 12.9262 20.9957 13.1106 20.7285L14.1943 19.1588C14.3599 18.919 14.6908 18.8708 14.9163 19.0537L16.1877 20.085C16.515 20.3505 17 20.1142 17 19.6891V9.61741" stroke="#828487" stroke-width="1.5" />
                        <path d="M6.75 8.5H13.75" stroke="#828487" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M6.75 11.5H13.75" stroke="#828487" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M6.75 14.5H11.5" stroke="#828487" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                        Bills</a>
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