import React from 'react'

export default function Header() {
  return (
    <div>
      <header>
        <img className="logo" src="/images/logo.svg" alt="logo"></img>
        <nav className="nav-bar">
          <ul className="nav-list">
            <li className="items">Features</li>
            <li className="items">Pricing</li>
            <li className="items">Resources</li>
          </ul>
        </nav>
        <ul className="nav-bar-button">
          <button className="login">Login</button>
          <button className="sign_up">Sign up</button>
        </ul>
      </header>
    </div>
  );
}
