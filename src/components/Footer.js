import React from 'react'
import "./Footer.scss"
import Logo from "./logo/logo_no_text.png"

function Footer() {
  return (
    <footer className="bg-gray-100">
    <img className="footer-logo" src={Logo} alt="logo" />
  </footer>
  )
}

export default Footer


  