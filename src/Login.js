import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="parent">
            <div className="header">
            <div className="logo">Brand Name</div>
            <nav>
                <Link to="login">Login</Link>
                <Link to="/">Register</Link>

            </nav>
        </div>
            </div>



            <div className="actualFormCont">
                <form action="/dashboard">
                    <input type="email" required placeholder="Email" autoComplete="off"/>
                    <input type="password" required placeholder="Password" autoComplete="off"/>
                    <button type="submit">Login</button>
                </form>
            </div>
            
        </>
    )
}

export default Login
