import React from 'react'
import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
          <div className='footer-accent' />
          <div className="footer-content-container">
            <img
              className="logo"
              src={logo}
              alt="logo"
            />
            <div className="footer-content-text">Thanks for looking around :)</div>
            <div className="footer-content-text">
              {/*<a href="https://github.com/aditdamodaran/portfolio">Find the repository here.</a>*/}
            </div>
          </div>
      </footer>
    )
  }
}

export default Footer
