import './App.scss';
import React, { useState } from 'react';





function Login({ item }) {
    let user = [
        {
            id: 1,
            userName: 'Tynybek',
            pasword: 1234
        }, {
            id: 2,
            userName: 'Majid',
            pasword: 4321
        },
    ]
    const [inputValues, setInputValues] = useState({
        inputValue1: '',
        inputValue2: '',
    }); // Создаем состояние inputValues и функцию для его обновления setInputValues
    const handleInputChange = (event) => {
        const { name, value } = event.target; // Получаем имя и значение из измененного input
        setInputValues({
            ...inputValues, // Распыляем текущее состояние inputValues
            [name]: value, // Обновляем значение нужного input-а по его имени
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Отменяем стандартное поведение формы, чтобы страница не перезагружалась
        // Делаем что-то с полученными значениями из inputValues, например, выводим их в консоль
        if (user.some(item => item.userName == inputValues.inputValue1 && item.pasword == inputValues.inputValue2)) {
            item(true)
            console.log(123213);
        } else {
            item(false)
            console.log(7777777);
        }
    }
    return (
        <div className="Login">
            <div className="container">
                <div className="block">
                    <img src="/media/svg/logo.svg" alt="Logo" />
                    <div className="login__form">
                        <h1>Login form</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form__inner">
                                <div className="form__input">
                                    <p>Username</p>
                                    <div>
                                        <img src="/media/svg/username.svg" alt="User" />
                                        <input
                                            type="text"
                                            name="inputValue1"
                                            value={inputValues.inputValue1}
                                            onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className="form__input">
                                    <p>Password</p>
                                    <div>
                                        <img src="/media/svg/pass.svg" alt="User" />
                                        <input
                                            type="text"
                                            name="inputValue2"
                                            value={inputValues.inputValue2}
                                            onChange={handleInputChange} />
                                    </div>
                                </div>
                                <a href="#" ><b>Forgot password?</b></a>
                            </div>
                            <button type='submit' style={{ width: '443px', height: ' 48px', margin: '20px 0' }} className='orange__btn'>Running order </button>
                        </form>
                    </div>
                    <a href="#">End user agreement</a>
                </div>
            </div>
        </div>

    );
}
export default Login;
