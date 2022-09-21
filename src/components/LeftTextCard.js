import React from 'react'

function LeftTextCard({ heading, summery, imageURL, Id, videoURL }) {
    return (
        <React.Fragment>
            <div className='flex flex-row justify-center border-t-8 border-[#222]' key={Id}>
                <div className='w-1/2 text-white text-center m-auto'>
                    <div className='space-y-6 text-left w-3/5 m-auto'>
                        <h1 className='font-bold text-2xl sm:text-2xl md:text-6xl mt-4'>{heading}</h1>
                        <h2 className='font-bold text-sm sm:text-xl md:text-3xl'>{summery}</h2>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={imageURL} alt={heading} className="relative z-[2]"/>
                    {videoURL ? <div className='absolute top-0% left-0'>
                        <video src={videoURL} autoPlay/>
                    </div> : ''}
                </div>
            </div>
        </React.Fragment>
    )
}

export default LeftTextCard;