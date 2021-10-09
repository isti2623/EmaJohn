import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='Password' />
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                    <p>new to emaJohn ? <Link to='/register'>Create Account</Link></p>
                    <div>------or-------</div>
                    <button className='btn-regular'>Google Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;