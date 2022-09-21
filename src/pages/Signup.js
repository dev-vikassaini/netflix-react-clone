import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { DEFAULT_ROUTES } from "../configuration/Route.Configuration";
import { UserAuth } from '../context/AuthContext';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, signUp } = UserAuth();
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            navigate(DEFAULT_ROUTES.DASHBOARD);
        } catch (error) {
            setError(error.message);
        }
    }
    return (
        <React.Fragment>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/c08e0e8a-d28f-4d82-bf93-0a9531b58a6d/IN-en-20220912-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='back' />

                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'>Sign Up</h1>
                            {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
                            <form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
                                <input className='p-3 my-2 rounded text-slate-900' type='email' placeholder='Email' autoComplete='email'
                                    onChange={(e) => setEmail(e.target.value)} />
                                <input className='p-3 my-2 rounded text-slate-900' type='password' placeholder='Password' autoComplete='current-password' onChange={(e) => setPassword(e.target.value)} />
                                <button className='bg-[#e50914] py-3 my-6 rounded font-bold'>
                                    Sign Up
                                </button>

                                <div className='flex justify-between items-center text-sm text-[#b3b3ae]'>
                                    <p><input className='mr-2' type='checkbox' />Remember Me</p>
                                    <p>Need Help?</p>
                                </div>
                                <p className='py-8'>
                                    <span className='text-[#b3b3ae]'>
                                        Already subscribed to Netflix?
                                    </span>{' '}
                                    <Link to={DEFAULT_ROUTES.SIGN_IN}>Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Signup; 