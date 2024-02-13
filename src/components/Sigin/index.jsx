import React, { useRef, useState } from 'react'
import axios from 'axios';
import loginimg from "../Img/img.png"
import "./index.css"
import { Link } from 'react-router-dom';

function index() {
    const textRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const formRef = useRef();

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (!validateEmail(emailRef.current.value)) {
            alert("email noto'g'ri kiritildi")
            emailRef.current.focus()
            return
        }

        if (!textRef.current.value) {
            alert('Username ga malumot kiritilishi shart')
            textRef.current.focus()
            return
        }
        if (!emailRef.current.value) {
            alert('Email ga malumot kiritilishi shart')
            emailRef.current.focus()
            return
        }
        if (!passwordRef.current.value) {
            alert('Passwordga ga malumot kiritilishi shart')
            passwordRef.current.focus()
            return
        }

        let user = {
            username: textRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        console.log(user);
        axios.post("https://auth-rg69.onrender.com/api/auth/signup", user)
            .then(res => {
                console.log(res.user);
                window.location.href = "/"
            })
            .catch(err => {
                console.log(err, 57);
            })
    }

    return (
        <div className="main">
            <div className='logins'>
                <h1>Welcome!</h1>
                <p>Register by entering username email password</p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div>
                        <label>Username*</label><br />
                        <input ref={textRef} type="text" placeholder='Enter your login...' />
                    </div>
                    <div>
                        <label>Email*</label><br />
                        <input ref={emailRef} type="email" placeholder='Enter your email...' /><br />
                    </div>
                    <div>
                        <label>Parol*</label><br />
                        <input ref={passwordRef} type="password" placeholder='Enter your password... ' /><br />
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

