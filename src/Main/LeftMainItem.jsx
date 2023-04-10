import React from 'react'

function LeftMain({ item, i }) {
    const [isActive, setIsActive] = React.useState(false)

    function handleClick(id) {
        if (id == i) {
            setIsActive(!isActive);
        } else {
            // setIsActive(isActive)
        }
    }
    return (
        <div onClick={() => handleClick(i)} className={`block ${isActive ? 'active' : ''}`}>
            {item.img}
            {item.title}
        </div>

    )
}

export default LeftMain
