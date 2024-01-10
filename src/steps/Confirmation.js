import React from 'react'
import images from './icon-thank-you.svg'

export default function Confirmation({toggleTab}) {
  return (
    <div className="step-page">
      <div className="text-center inner-container">
      <img src={images} alt=""/>
        <h1><b>Thank you</b></h1>
        <p>Thanks for confirming your subscription!</p>
        <p>We hope you have fun using our platform. If you ever need support, please feel free to email us at
          support@loremgaming.com
        </p>
        <button className="px-3 py-1 bg-primary border-0 rounded-1 text-white" onClick={e=> toggleTab(1)}>Home</button>
      </div>
    </div>
  )
}
