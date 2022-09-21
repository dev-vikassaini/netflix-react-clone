import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import LeftTextCard from '../components/LeftTextCard';
import RightTextCard from '../components/RightTextCard';
import AskedQuestions from '../components/AskedQuestions';
import Footer from '../components/Footer';

function Home() {
    return (
        <React.Fragment>
            <div className='w-full h-[485px] sm:h-[860px]'>
                <div className='relative'>
                    <img className='sm:block absolute w-full h-[485px] sm:h-[860px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/a795ee10-8c6d-467c-8159-254be2b69013/c08e0e8a-d28f-4d82-bf93-0a9531b58a6d/IN-en-20220912-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='back' />

                    <div className='bg-black/60 top-0 left-0 w-full h-[485px] sm:h-[860px] absolute'></div>
                    <div className='w-full px-4 py-36 z-50 absolute sm:py-64 md:py-64'>
                        <div className='max-w-[1000px] mx-auto text-white text-center justify-center items-center space-y-2 sm:space-y-4'>
                            <p className='font-bold text-4xl sm:text-7xl'>Unlimited movies, TV</p>
                            <p className='font-bold text-4xl sm:text-7xl'>shows and more.</p>
                            <p className='text-2xl sm:text-4xl'>Watch anywhere. Cancel anytime.</p>
                            <div className='!mt-10'>
                                <p className='text-sm md:text-2xl mb-5'>Ready to watch? Enter your email to create or restart your membership.</p>
                                <div className="inline-flex rounded-md shadow-sm w-full" role="group">
                                    <input className='h-12 sm:h-20 w-8/12 p-4 font-bold sm:text-lg text-black' type='email' autoComplete='email' placeholder='Email Address' />
                                    <button className='h-12 sm:h-20 bg-red-600 w-2/6 text-sm sm:text-3xl'>
                                        <span className='flex flex-row justify-center'>Get Started <MdKeyboardArrowRight className='justify-center mt-1' /></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full absolute overflow-hidden'>
                <LeftTextCard heading="Enjoy on your TV." summery="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more." imageURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" Id="1"
                    videoURL="" />

                <RightTextCard heading="Download your shows to watch offline." summery="Save your favourites easily and always have something to watch." imageURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" Id="2" videoURL="" />

                <LeftTextCard heading="Watch everywhere." summery="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV." imageURL="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" Id="3"
                    videoURL="" />

                <RightTextCard heading="Create profiles for children." summery="Send children on adventures with their favourite characters in a space made just for them—free with your membership." imageURL="https://occ-0-5005-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" Id="4" videoURL="" />

                <AskedQuestions />
                <Footer />
            </div>

        </React.Fragment>
    )
}

export default Home;