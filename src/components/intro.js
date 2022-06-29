import React from 'react'

export default function Intro() {
  return (
    <div className = 'intro'>
        <p className='text'>
            <img  className ='illustration_working' src='/images/illustration-working.svg'  alt = "working logo" />
            <h1 className='quote'>More than just shorter links</h1>
            <p className = 'inside_text'>Build your brand's recognition and get detailed insights 
            on how your links are performing.
            </p>
            <img className='searchbar' src = '/images/searchbar.svg' alt = "search bar" />
        </p>
        {/* <img src = '../images/illustration-working.svg' alt='wokrking logo' /> */}
    </div>
  )
}
