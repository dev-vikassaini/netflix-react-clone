import React, { useState } from 'react'
import parse from 'html-react-parser';
import { MdClose, MdAdd } from 'react-icons/md';

function AskedQuestionAccordion({ heading, summery, Keys, labelledBy, accordionId, accordionTarget }) {
    let [hideShow, hideShowAskedQuestionAccordion] = useState('accordion-hide');
    let [hideShowButton, hideShowAskedQuestionButton] = useState(false);
    hideShowAskedQuestionAccordion = (e, accordionId) => {
        e.preventDefault();
        const currentAccordion = document.getElementById(accordionId);
        if (currentAccordion.classList.contains('accordion-hide')) {
            currentAccordion.classList.remove("accordion-hide");
            currentAccordion.classList.add("accordion-show");
            hideShowAskedQuestionButton(true);
        } else {
            currentAccordion.classList.remove("accordion-show");
            hideShowAskedQuestionButton(false)
            currentAccordion.classList.add("accordion-hide");
        }
    };

    return (
        <React.Fragment>
            <div className="mb-3 parent" key={Keys} >
                <h2 id={labelledBy} className="border border-b-2 border-black">
                    <button type="button" className="flex items-center justify-between w-full p-5 bg-[#303030] h-24 !py-[.8em] !pl-[2.2em] !pr-[1.2em]" data-accordion-target={accordionTarget} aria-expanded="false" aria-controls={accordionId} onClick={(e) => hideShowAskedQuestionAccordion(e, accordionId)}>
                        <span className="text-xl sm:text-2xl md:text-4xl font-normal">{heading}</span>
                        {hideShowButton ? (<MdClose className='text-white' size={70}/>):(<MdAdd className='text-white' size={70}/>)}
                    </button>
                </h2>
                <div id={accordionId} className={`${hideShow}`} aria-labelledby={labelledBy}>
                    <div className="p-5 text-xl sm:text-2xl md:text-4xl font-normal bg-[#303030]">
                        <p className='text-left pl-5'>
                            {parse(summery)}
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AskedQuestionAccordion