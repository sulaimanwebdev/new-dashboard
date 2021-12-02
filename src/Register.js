import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {
    return (
        <>
            <div className="parent">
            <div className="header">
            <div className="logo">Brand Name</div>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/">Register</Link>

            </nav>
        </div>
            </div>



            <div className="actualFormCont">
                <form action="/renvenue">
                    <input type="email" required placeholder="Email" autoComplete="off"/>
                    <input type="password" required placeholder="Password" autoComplete="off"/>
                    <input type="password" required placeholder="Confirm password" autoComplete="off"/>
                    <button type="submit">Register</button>
                </form>
            </div>
            
        </>
    )
}

export default Register
