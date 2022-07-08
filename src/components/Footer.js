import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className='footer'>
            <ul>
            <h4>Shortly</h4>
            <p>A simple URL shortener</p>
            </ul>
            <article>Features
                <ul>
                    <li>Link Shortening</li>
                    <li> Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </article>
            <article>Resources
                <ul>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </article>
            <article>Company
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contacts</li>
                </ul>
            </article>
        <ul className='logo'>
            <li><img src="https://img.icons8.com/ios/50/000000/facebook-new.png" alt="facebook logo" /></li>
            <li><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" alt="insta logo"/></li>
         <li><img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" alt="twitter logo"/></li>
         </ul>
        </footer>
         <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
            Coded by <a href="#">Yashasewi</a>.
            </div>
    </>
  )
}
