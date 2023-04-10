import React from 'react'
import './Main.scss'

import Header from './Header/Header';
import LeftMain from './LeftMain/LeftMain';
const Main = () => {
    const fixator = '1'
    const [selected, setSelected] = React.useState(fixator);

    const handleClick = () => {
        setSelected(selected);
    }

    return (
        <div className='Main'>
            <Header />
            <LeftMain newClass={selected ? 'flex' : 'none'} />
        </div >
    )


};

export default Main;

