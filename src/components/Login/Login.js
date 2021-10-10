import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <div>
                    <input type="email" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='Password' />
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                    <p>new to emaJohn ? <Link to='/register'>Create Account</Link></p>
                    <div>------or-------</div>
                    <button
                        onClick={signInUsingGoogle}
                        className='btn-regular'>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;