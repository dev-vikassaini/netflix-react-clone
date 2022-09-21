import React, { useState } from 'react'
import { MdLanguage, MdArrowDropDown } from 'react-icons/md';

export default function Footer() {
    const [hoverMenu, setHoverMenu] = useState(false);

    function openShowLanguage(e) {
        e.preventDefault();
        setHoverMenu(hoverMenu => !hoverMenu);
    }

    return (
        <React.Fragment>
            <div className='w-full border-t-8 border-[#222] mb-20'>
                <div className='w-3/5 flex flex-col justify-center text-white m-auto mt-16 space-y-10'>
                    <h1 className='text-gray-500 text-sm md:text-xl'>Questions? Call 000-800-040-1843</h1>
                    <div className='flex flex-row space-x-40 text-gray-500 font-semibold text-base'>
                        <div className='flex flex-col space-y-6'>
                            <a href='#!'>FAQ</a>
                            <a href='#!'>Investor Relations</a>
                            <a href='#!'>Privacy</a>
                            <a href='#!'>Speed Test</a>
                        </div>
                        <div className='flex flex-col space-y-6'>
                            <a href='#!'>Help Centre</a>
                            <a href='#!'>Jobs</a>
                            <a href='#!'>Cookie Preferences</a>
                            <a href='#!'>Legal Notices</a>
                        </div>
                        <div className='flex flex-col space-y-6'>
                            <a href='#!'>Account</a>
                            <a href='#!'>Ways to Watch</a>
                            <a href='#!'>Corporate Information</a>
                            <a href='#!'>Only on Netflix</a>
                        </div>
                        <div className='flex flex-col space-y-6'>
                            <a href='#!'>Media Centre</a>
                            <a href='#!'>Terms of Use</a>
                            <a href='#!'>Contact Us</a>
                        </div>
                    </div>
                    <div>
                        <button onClick={(e) => openShowLanguage(e)} id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" className="text-gray-500 bg-black-700 hover:bg-black-800 rounded-lg text-lg px-4 py-4 text-center inline-flex items-center border-2 border-white" type="button"><MdLanguage size={32} className="mr-4" /> English <MdArrowDropDown size={32} className="ml-4" /></button>
                        {!hoverMenu ? '' :
                            <div id="dropdownDefaultCheckbox" className="z-[200] w-48 bg-black rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 border">
                                <ul className="space-y-3 text-lg text-white" aria-labelledby="dropdownCheckboxButton">
                                    <li className='hover:bg-blue-700 cursor-pointer'>
                                        <div className="flex items-center">
                                            <a className='p-2' href='#!'>English</a>
                                        </div>
                                    </li>
                                    <li className='hover:bg-blue-700 cursor-pointer'>
                                        <div className="flex items-center">
                                            <a className='p-2' href='#!'>Hindi</a>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        }
                    </div>
                    <div className='text-gray-500 text-sm md:text-xl'>
                        <p>Netflix India</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
