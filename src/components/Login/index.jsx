import React, { useRef } from 'react'
import logo from '../Img/logo.png'
import axios from 'axios';
import loginimg from "../Img/img.png"
import "./index.css"
import { Link } from 'react-router-dom';


function index() {

    const textRef = useRef();
    const passwordRef = useRef();
    const formRef = useRef();


    function handleSubmit(e) {
        e.preventDefault();

        if (!textRef.current.value) {
            alert('Login ga malumot kiritilishi shart')
            textRef.current.focus()
            return
        }
        if (!passwordRef.current.value) {
            alert('Passwordga ga malumot kiritilishi shart')
            passwordRef.current.focus()
            return
        }

        let user = {
            username: textRef.current.value,
            email: "test@gamil.com",
            password: passwordRef.current.value
        }


        axios.post(import.meta.env.VITE_API_URL_IN, user)
            .then(res => {
                window.location.href = "/card"
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className="main">
            <div className='logins'>
                <img className="img" src={logo} width={100} />
                <h1>Welcome!</h1>
                <p>Enter your login password and enter your office</p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div>
                        <label>Login*</label><br />
                        <input ref={textRef} type="text" placeholder='Enter your login...' />
                    </div>
                    <div>
                        <label>Parol*</label><br />
                        <input ref={passwordRef} type="password" placeholder='Enter your password...' /><br />
                    </div>
                    <button>Enter</button>
                </form>
                <ul>
                    <li className='links'>
                        <Link className='link' to="/">Login</Link>
                        <Link className='link' to="/signup">Signup</Link>
                    </li>
                </ul>
            </div>
            <div className="picture">
                <img src={loginimg} alt="" width={680} />
            </div>
        </div>
    )
}

export default index

