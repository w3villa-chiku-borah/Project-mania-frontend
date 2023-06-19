import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="brand-login">
      <div className="brand-name">
        <h1>PROJECTS<span>MANIA</span></h1>
      </div>

      <div className="login-signup">
        <button>
        <a href='/'>Signup</a>
        </button>
        <button>
        <a href='/'>Login</a>
        </button>
       </div>
      </div>
    </div>
  )
}
