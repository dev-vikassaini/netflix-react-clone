import React from 'react'
import AskedQuestionAccordion from './AskedQuestionAccordion';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FrequentlyAskedQuestionsData } from '../data/FrequentlyAskedQuestionsData';

export default function AskedQuestions() {
    return (
        <React.Fragment>
            <div className='border-t-8 border-[#222]'>
                <div className='w-3/5 flex flex-col justify-center text-white text-center m-auto mt-16 space-y-20 mb-10'>
                    <h1 className='font-bold text-3xl sm:text-7xl md:text-7xl'>Frequently Asked Questions</h1>
                    <div className="w-full mx-auto rounded space-y-2">
                        <div id="accordion-arrow-icon">
                            {FrequentlyAskedQuestionsData.map((question, id) => (
                                <AskedQuestionAccordion key={id} heading={question?.heading} summery={question?.summery} Keys={question.id} labelledBy={`accordion-arrow-icon-heading-${question?.id}`} accordionId={`accordion-arrow-icon-body-${question?.id}`} accordionTarget={`#accordion-arrow-icon-body-${question?.id}`} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-3/6 flex flex-col justify-center text-white text-center m-auto mt-16 space-y-20 mb-20'>
                    <div className='w-full mx-auto text-white text-center justify-center items-center space-y-4'>
                        <p className='text-sm md:text-2xl mb-5'>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className="inline-flex rounded-md shadow-sm w-full" role="group">
                            <input className='h-12 sm:h-20 w-8/12 p-4 font-bold sm:text-lg text-black' type='email' autoComplete='email' placeholder='Email Address' />
                            <button className='h-12 sm:h-20 bg-red-600 w-2/6 text-xs sm:text-sm lg:text-3xl md:text-2xl'>
                                <span className='flex flex-row justify-center'>Get Started <MdKeyboardArrowRight className='justify-center mt-1' /></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
