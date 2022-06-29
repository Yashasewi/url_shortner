import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className='footer'>
            <h4>Shortly</h4>
            <p>A simple URL shortener</p>
            <span>Features</span>
            <ul>
                <li>Link Shortening</li>
                <li> Branded Links</li>
                <li>Analytics</li>
            </ul>
            <span>Resources</span>
            <ul>
                <li>Blog</li>
                <li>Developers</li>
                <li>Support</li>
            </ul>
            <span>Company</span>
            <ul>
                <li>About</li>
                <li>Our Team</li>
                <li>Careears</li>
                <li>Contacts</li>
            </ul>
        <ul className='footer_icons'>
            <li><img src="https://img.icons8.com/ios/50/000000/facebook-new.png" alt="facebook logo" /></li>
            <li><img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" alt="insta logo"/></li>
         <li><img src="https://img.icons8.com/ios/50/000000/twitter--v1.png" alt="twitter logo"/></li>
         </ul>
        </footer>
         <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
            Coded by <a href="#">Yashasewi</a>.
            </div>
    </div>
  )
}
