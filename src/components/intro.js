import React from 'react'

export default function Intro() {
  return (
    <div className = 'intro'>
            <div className = 'inside_text'>
            <h1 className='quote'>More Than Just<br/>Shorter Links</h1>
            Build your brand's recognition and get detailed<br/> insights 
            on how your links are performing.
            </div>
            <img  className ='img' src='/images/illustration-working.svg'  alt = "working logo" />
            <img className='search_bar_img' src = '/images/searchbar.svg' alt = "search bar" />
        {/* <img src = '../images/illustration-working.svg' alt='working logo' /> */}
    </div>
  )
}
