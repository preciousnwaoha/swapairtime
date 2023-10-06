'use client';
import React, {useState} from "react";
import Link from 'next/link'
import PaddedContainer from "../layout/padded-container";
import { FAQLIST, OFFERINGS } from "@/config/site";
import { HiOutlineChevronUp, HiOutlineChevronDown} from 'react-icons/hi'

const ActionsList = () => {
  const [openedFAQ, setOpenedFAQ] = useState(null)

  const handleOpenFAQ = (index) => {
    setOpenedFAQ(index)
  }

  return (
    <PaddedContainer className="py-4 mb-8">
      <h2 className='text-2xl font-bold'>Endless Airtime conversions no matter how small.</h2>
      <ul role="list" className="mt-4">
        {FAQLIST.map((faq, index) => {
          return <li key={index} className={`rounded-lg ${(openedFAQ === index) && "border border-primary-400 p-4"} py-4 `} 
          onClick={() => {handleOpenFAQ(index)}}>
          <div className='flex items-center justify-between cursor-pointer font-bold text-sm'>
            <h4>0{index + 1} {faq.question}</h4>

            {(openedFAQ === index) ? <HiOutlineChevronDown  className="text-2xl" /> : <HiOutlineChevronUp className="text-2xl" /> }
          </div>
          {(openedFAQ === index)&& <>
            <p className="mt-4 text-sm mb-4">
            {" "}
            {faq.answer}
          </p>
          
          <Link href='/login'>
          <button className="btn btn-contained">Get started</button>
          </Link>
          
          </>}

        </li>
        })}
        
      </ul>
    </PaddedContainer>
  );
};

export default ActionsList;
