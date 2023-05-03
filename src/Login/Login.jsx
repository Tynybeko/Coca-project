import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './App.scss';
import React, { useEffect, useState } from 'react';
import { CartContext2 } from '../context/CartContext2';

// useEffect(() => {
//     const photoDataUrl = localStorage.getItem('profilePhoto');

//     if (photoDataUrl) {
//       const byteString = atob(photoDataUrl.split(',')[1]);
//       const mimeString = photoDataUrl.split(',')[0].split(':')[1].split(';')[0];
//       const ab = new ArrayBuffer(byteString.length);
//       const ia = new Uint8Array(ab);

//       for (let i = 0; i < byteString.length; i++) {
//         ia[i] = byteString.charCodeAt(i);
//       }

//       const blob = new Blob([ab], { type: mimeString });
//       setPhoto(blob);
//     }
//   }, []);

//   if (!photo) {
//     return null;
//   }

//   const [photo, setPhoto] = useState(null)

//   function handlePhotoChange(event) {
//       setPhoto(event.target.files[0]);
//   }

//   function savePhotoToLocalStorage() {
//       const reader = new FileReader();

//       reader.readAsDataURL(photo);

//       reader.onload = function () {
//           localStorage.setItem('profilePhoto', reader.result);
//       }
//   }

// <img src={URL.createObjectURL(photo)} alt="Фото профиля" />
// <input onChange={handlePhotoChange} type="file" />
// <button onClick={savePhotoToLocalStorage}>Сохранить</button>



function Login() {
    const [myuser, setmyuser] = React.useContext(CartContext)
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [cart, setCart] = useContext(CartContext2)
    const namRegex = /^[а-яё]+(?:[ -]{1}[а-яё]*)?$/i


    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('users')) || []);
    const [inputValues, setInputValues] = useState({
        inputValue1: '',
        inputValue2: '',
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
        setMessage((prev) => {
            return {
                ...prev,
                ['forLog']: '',
                ['forPass']: '',
            }
        })
        setComplete((prev) => {
            return {
                ...prev,
                ['forLog']: '1px solid #E4E4E4',
                ['forPass']: '1px solid #E4E4E4',
            }
        })

    }

    const [lock, setLock] = useState(false)

    const [complete, setComplete] = React.useState({
        name: '1px solid #E4E4E4',
        surname: '1px solid #E4E4E4',
        email: '1px solid #E4E4E4',
        password: '1px solid #E4E4E4',
        confPass: '1px solid #E4E4E4',
        login: '1px solid #E4E4E4',
        forLog: '1px solid #E4E4E4',
        forPass: '1px solid #E4E4E4',

    })

    const [newUser, addUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        confPass: '',
        login: '',
        status: 3,
        history: [],
        cart: [],
        discount: 10,
        total: 0
    })
    const [active, setActive] = React.useState(false)
    const [message, setMessage] = React.useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        login: '',
        forLog: '',
        forPass: ''
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        setCart([])
        if (user.length > 0) {
            let myUser = user.find(item => item.login == inputValues.inputValue1 && item.password == inputValues.inputValue2)
            if (myUser) {
                sessionStorage.setItem('user', JSON.stringify(myUser))
                setmyuser(myUser)
            } else {
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['forLog']: 'Непральный логин или пароль',
                    }
                })
                setComplete((prev) => {
                    return {
                        ...prev,
                        ['forLog']: '1px solid #ff0000',
                        ['forPass']: '1px solid #ff0000',
                    }
                })
            }
        } else {
            setMessage((prev) => {
                return {
                    ...prev,
                    ['forLog']: 'Непральный логин или пароль',
                }
            })
            setComplete((prev) => {
                return {
                    ...prev,
                    ['forLog']: '1px solid #ff0000',
                    ['forPass']: '1px solid #ff0000',
                }
            })
        }
    }

    const handleNewUser = (e) => {
        switch (e.target.name) {
            case 'name':
                addUser({
                    ...newUser,
                    ['name']: e.target.value
                })
                setComplete((prev) => {
                    return {
                        ...prev,
                        ['name']: '1px solid #E4E4E4',
                    }
                })
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['name']: ''
                    }
                })

                break
            case 'login':
                addUser({
                    ...newUser,
                    ['login']: e.target.value
                })
                setComplete((prev) => {
                    return {
                        ...prev,
                        ['login']: '1px solid #E4E4E4',
                    }
                })
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['login']: ''
                    }
                })

                break
            case 'surname':
                addUser({
                    ...newUser,
                    ['surname']: e.target.value
                })
                setComplete((prev) => {
                    return {
                        ...prev,
                        ['surname']: '1px solid #E4E4E4',
                    }
                })
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['surname']: '',
                    }

                })
                break
            case 'email':
                addUser({
                    ...newUser,
                    ['email']: e.target.value
                })
                setComplete((prev) => {
                    return {
                        ...prev,
                        ['email']: '1px solid #E4E4E4',
                    }
                })
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['email']: ''
                    }
                })
                break
            case 'password':
                addUser({
                    ...newUser,
                    ['password']: e.target.value
                })
                setComplete((prev) => {
                    return {
                        ...prev,
                        ['password']: '1px solid #E4E4E4',
                    }
                })
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['password']: ''
                    }
                })

                break
            case 'confPassword':
                addUser({
                    ...newUser,
                    ['confPass']: e.target.value
                })
                setComplete((prev) => {
                    return {
                        ...prev,
                        ['confPass']: '1px solid #E4E4E4',
                    }
                })

        }
    }
    const RegExpUser = () => {
        let fixator = 0
        if (!namRegex.test(newUser.name) || newUser.name.length == 0) {
            setComplete((prev) => {
                return {
                    ...prev,
                    ['name']: '1px solid #ff0000',
                }
            })
            if (newUser.name.length == 0) {
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['name']: 'Поле не должен быть пустым!'
                    }
                })
            } else {
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['name']: 'Не должно содержать символов, цифр и латинских букв!'
                    }
                })
            }

        } else {
            setComplete((prev) => {
                return {
                    ...prev,
                    ['name']: '1px solid #228B22',
                }
            })
            fixator++
        }
        if ((/\W|\^[A-z]*4/).test(newUser.login) || newUser.login.length <= 5) {
            setComplete((prev) => {
                return {
                    ...prev,
                    ['login']: '1px solid #ff0000',
                }

            })
            if (newUser.login.length <= 5) {
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['login']: 'Длина логина должно быть больше 5!'
                    }
                })
            } else {
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['login']: 'Логин должен быть на латинском и не содержать символов'
                    }
                })
            }
        } else {
            if (user.some(item => item.login == newUser.login)) {
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['login']: 'Такой логин уже существует'
                    }
                })
                setComplete((prev) => {
                    return {
                        ...prev,
                        ['login']: '1px solid #ff0000',
                    }
                })
            } else {
                setComplete((prev) => {
                    return {
                        ...prev,
                        ['login']: '1px solid #228B22',
                    }
                })
                fixator++

            }
        }
        if (!namRegex.test(newUser.surname) || newUser.surname.length == 0) {
            setComplete((prev) => {
                return {
                    ...prev,
                    ['surname']: '1px solid #ff0000',
                }

            })
            if (newUser.surname.length == 0) {
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['surname']: 'Поле не должен быть пустым!'
                    }
                })
            } else {
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['surname']: 'Не должно содержать символов, цифр и латинских букв!'
                    }
                })
            }
        } else {
            setComplete((prev) => {
                return {
                    ...prev,
                    ['surname']: '1px solid #228B22',
                }
            })
            fixator++
        }
        if (!mailformat.test(newUser.email, 'g') || newUser.email.length == 0) {
            setComplete((prev) => {
                return {
                    ...prev,
                    ['email']: '1px solid #ff0000',
                }
            })
            if (newUser.email.length == 0) {
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['email']: 'Поля не должен быть пустым!'
                    }
                })
            } else {
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['email']: 'Не верный формат!'
                    }
                })
            }
        } else {
            if (user.some(item => item.email == newUser.email)) {
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['email']: 'Такой email уже существует!'
                    }
                })
                setComplete((prev) => {
                    return {
                        ...prev,
                        ['email']: '1px solid #ff0000',
                    }
                })
            } else {
                setComplete((prev) => {
                    return {
                        ...prev,
                        ['email']: '1px solid #228B22',
                    }
                })
                fixator++
            }
        }
        if (newUser.password !== newUser.confPass || newUser.password.length < 8 || newUser.confPass.length < 8) {
            setComplete((prev) => {
                return {
                    ...prev,
                    ['password']: '1px solid #ff0000',
                    ['confPass']: '1px solid #ff0000',
                }
            })
            if (newUser.password !== newUser.confPass) {
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['password']: 'Пароли должны совпадать!'
                    }
                })
            } else {
                setMessage((prev) => {
                    return {
                        ...prev,
                        ['password']: 'Пароль должен быть не меньше 5 символов'
                    }
                })
            }
        } else {
            setComplete((prev) => {
                return {
                    ...prev,
                    ['password']: '1px solid #228B22',
                    ['confPass']: '1px solid #228B22',
                }
            })
            fixator++
        }

        if (fixator == 5) {
            setCheckUser(!checkUser)
            if (user.length == 0) {
                addUser((prev) => {
                    return {
                        ...prev,
                        ['id']: 1,
                    }
                })
                localStorage.setItem('users', JSON.stringify([...user, newUser]))

                setUser(JSON.parse(localStorage.getItem('users')))
            } else {
                addUser((prev) => {
                    return {
                        ...prev,
                        ['id']: user.at(-1).id + 1
                    }
                })
                let url = JSON.parse(localStorage.getItem('users'))
                localStorage.setItem('users', JSON.stringify([...url, newUser]))
                setUser(JSON.parse(localStorage.getItem('users')))
            }
        }
    }
    const [checkUser, setCheckUser] = React.useState(false)


    useEffect(() => {
        setMessage({
            name: '',
            surname: '',
            email: '',
            password: '',
            login: '',
            forLog: '',
            forPass: ''
        })
        setComplete({
            name: '1px solid #E4E4E4',
            surname: '1px solid #E4E4E4',
            email: '1px solid #E4E4E4',
            password: '1px solid #E4E4E4',
            confPass: '1px solid #E4E4E4',
            login: '1px solid #E4E4E4',
            forLog: '1px solid #E4E4E4',
            forPass: '1px solid #E4E4E4',
        })
        addUser({
            name: '',
            surname: '',
            email: '',
            password: '',
            confPass: '',
            login: '',
            status: 3,
            history: [],
            cart: [],
            discount: 10,
            total: 0
        })
    }, [checkUser])






    return (
        <div className="Login">
            <div className="container">
                <div className="block">
                    {
                        checkUser ? <div className="checkUser">
                            <div className="filter">
                                <p style={{ display: 'none' }}>
                                    {
                                        setTimeout(() => {
                                            setCheckUser(!checkUser)

                                            setActive(!active)
                                        }, 1000)
                                    }
                                </p>

                                <h3>Пользователь добавлен!</h3>

                                <svg class="feather feather-user-check" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>
                            </div>
                        </div> : null
                    }
                    <img src="/media/svg/logo.svg" alt="Logo" />
                    {
                        active ? <div className="registration__form">
                            <div className="inner">
                                <div className='head'>
                                    <h2>Registration form</h2>
                                    <svg onClick={() => {
                                        addUser({
                                            name: '',
                                            surname: '',
                                            email: '',
                                            password: '',
                                            confPass: '',
                                            login: '',
                                            status: 3,
                                            history: [],
                                            cart: [],
                                            discount: 10,
                                            total: 0
                                        })
                                        setActive(!active)
                                    }} class="feather feather-x" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg>
                                </div>
                                <div className="inner">
                                    <div className="form__input">
                                        {message.login ? <p className='Error'>{message.login}</p> : <p>Login</p>}

                                        <div style={{ border: complete.login }}>
                                            <svg class="feather feather-users" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                            <input
                                                type="text"
                                                name="login"
                                                value={newUser.login}
                                                onChange={handleNewUser} />
                                        </div>
                                    </div>
                                    <div className="form__input">
                                        {message.name ? <p className='Error'>{message.name}</p> : <p>Name</p>}
                                        <div style={{ border: complete.name }}>
                                            <svg class="feather feather-edit-3" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                                            <input
                                                type="text"
                                                name="name"
                                                value={newUser.name}
                                                onChange={handleNewUser} />
                                        </div>


                                    </div>
                                    <div className="form__input">
                                        {message.surname ? <p className='Error'>{message.surname}</p> : <p>Surname</p>}

                                        <div style={{ border: complete.surname }}>
                                            <svg class="feather feather-edit-3" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                                            <input
                                                type="text"
                                                name="surname"
                                                value={newUser.surname}
                                                onChange={handleNewUser} />
                                        </div>
                                    </div>
                                    <div className="form__input">
                                        {message.email ? <p className='Error'>{message.email}</p> : <p>Email</p>}

                                        <div style={{ border: complete.email }}>
                                            <svg class="feather feather-mail" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                            <input
                                                type="text"
                                                name="email"
                                                value={newUser.email}
                                                onChange={handleNewUser} />
                                        </div>
                                    </div>
                                    <div className="form__input">
                                        {message.password ? <p className='Error'>{message.password}</p> : <p>Password</p>}

                                        <div style={{ border: complete.password }}>
                                            <img src="/media/svg/pass.svg" alt="User" />
                                            <input
                                                type={lock ? 'text' : 'password'}
                                                name="password"
                                                value={newUser.password}
                                                onChange={handleNewUser}
                                            />

                                        </div>
                                    </div>
                                    <div className="form__input">
                                        <p>Confirm Password</p>
                                        <div style={{ border: complete.confPass }}>
                                            <img src="/media/svg/pass.svg" alt="User" />
                                            <input
                                                type={lock ? 'text' : 'password'}
                                                name="confPassword"
                                                onChange={handleNewUser}
                                            />
                                        </div>
                                        <label onClick={() => {
                                            setLock(!lock)
                                        }} className='passwordLock' htmlFor=""> {lock ? <svg class="feather feather-eye" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg> : <svg class="feather feather-eye-off" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" x2="23" y1="1" y2="23" /></svg>} Показать пароль</label>
                                    </div>
                                    <button onClick={RegExpUser} className='finish'>Registration</button>
                                </div>

                            </div>
                        </div> : <div className="login__form">
                            <h1>Login form</h1>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form__inner">
                                    <div className="form__input">
                                        {!message.forLog ? <p>Login</p> : <p style={{ color: 'red' }}>{message.forLog}</p>}
                                        <div style={{ border: complete.forLog }}>
                                            <img src="/media/svg/username.svg" alt="User" />
                                            <input
                                                type="text"
                                                name="inputValue1"
                                                value={inputValues.inputValue1}
                                                onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="form__input">
                                        {!message.forPass ? <p>Password</p> : message.forPass}
                                        <div style={{ border: complete.forPass }}>
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
                                <div className="btn">
                                    <button type='submit' style={{ width: '443px', height: ' 48px', margin: '20px 0' }} className='orange__btn'>Running order </button>
                                    <button onClick={() => {
                                        setActive(!active)
                                    }} className='regist'>Registration</button>
                                </div>
                            </form>
                        </div>
                    }



                    <a href="#">End user agreement</a>
                </div>
            </div >
        </div >

    );
}
export default Login;
