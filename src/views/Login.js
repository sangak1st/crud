import React from 'react';
import '../styles/login.css'

export const Login = () => {
    return (
        <div className='login'>
            <form className='login-form'>
                <h1 className='title'>LOGIN</h1>
                <span className='lable-form'>Username</span>
                <input
                    type='text'
                    placeholder='Enter username'
                    className='form-input'
                />
                <span className='lable-form'>Password</span>
                <input
                    type='password'
                    placeholder='Enter password'
                    className='form-input'
                />
                <button
                    type='button'
                    className='btn-login'
                >
                    LOGIN
                </button>
            </form>
        </div>
    )
}
