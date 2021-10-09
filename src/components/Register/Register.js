import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Register:Create Account</h2>
                <form onSubmit="">
                    <input type="email" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='Password' />
                    <br />
                    <input type="password" name="" id="" placeholder='Re-enter Password' />
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                    <p>Already Have An Account ? <Link to='/login'>Login</Link></p>
                    <div>------or-------</div>
                    <button className='btn-regular'>Google Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Register;