'use client';
import React, {useState} from "react";
import PaddedContainer from "../layout/padded-container";
import { OFFERINGS } from "@/config/site";
import { HiOutlineChevronUp, HiOutlineChevronDown} from 'react-icons/hi'

const FAQs = () => {
  const [openedOffer, setOpenedOffer] = useState(null)

  const handleOpenOffer = (index) => {
    setOpenedOffer(index)
  }

  return (
    <PaddedContainer className="py-4 mb-8">
        <h2 className='text-2xl font-bold mb-4'>More questions? we&apos; got you covered.</h2>
        <button className="btn btn-contained mb-8">Contact us</button>

        <h3 className="font-semibold text-xl">FAQs</h3>
      
      <ul role="list" className="mb-4">
        {OFFERINGS.map((offer, index) => {
          return <li key={index} className={`rounded-lg py-4 `} 
          onClick={() => {handleOpenOffer(index)}}>
          <div className='flex items-center justify-between cursor-pointer font-bold text-sm'>
            <h4>0{index + 1} {offer.heading}</h4>

            <div className={`text-xl font-medium ${(openedOffer === index) && "text-primary-400"}`}>
            {(openedOffer === index) ? "-" : "+" }
            </div>
            
          </div>
          {(openedOffer === index)&& <>
            <p className="mt-4 text-sm mb-4">
            {" "}
            {offer.description}
          </p>

          <button className="btn btn-contained">Get started</button>
          </>}

        </li>
        })}
        
      </ul>
    </PaddedContainer>
  );
};

export default FAQs;
