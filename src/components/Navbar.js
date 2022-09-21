import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { DEFAULT_ROUTES } from "../configuration/Route.Configuration";
import { UserAuth } from '../context/AuthContext';

function Navbar() {
    const navigate = useNavigate();
    const { user, logOut } = UserAuth();
    const handleLogOut = async () => {
        try {
            await logOut();
            navigate(DEFAULT_ROUTES.HOME);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDashboard = async () => {
        try {
            if (user) {
                navigate(DEFAULT_ROUTES.DASHBOARD);
            } else {
                navigate(DEFAULT_ROUTES.HOME);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <React.Fragment>
            <div className="flex item-center justify-between p-4 z-[100] absolute w-full">
                <h1 onClick={handleDashboard} className="text-red-600 text-4xl font-bold cursor-pointer">NETFLIX</h1>
                {user?.email ? (<div>
                    <Link to={DEFAULT_ROUTES.PROFILE}>
                        <button className="text-white pr-4">Profile</button>
                    </Link>
                    <button onClick={handleLogOut} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Logout</button>
                </div>) : (

                    <div>
                        <Link to={DEFAULT_ROUTES.SIGN_IN}>
                            <button className="text-white pr-4">Sign In</button>
                        </Link>
                        <Link to={DEFAULT_ROUTES.SIGN_UP}>
                            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Sign Up</button>
                        </Link>
                    </div>
                )
                }

            </div>
        </React.Fragment>
    )
}

export default Navbar;