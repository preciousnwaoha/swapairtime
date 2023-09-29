import React from 'react'
import PaddedContainer from '../layout/padded-container'

const NewsletterSubscribe = () => {
  return (
    <div>
        <PaddedContainer >
            <h2>Subscribe for freebies</h2>
            <p>Get notified of all our premium discounts and promos. We will also notify <br />you from time to time when we make updates to serve you better.</p>
            <div>
                <input /> 
                <button >Get started</button>
            </div>
        </PaddedContainer>
    </div>
  )
}

export default NewsletterSubscribe