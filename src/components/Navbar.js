/* eslint-disable */
/* ----------------
THANKS TO BRITTANY CHIANG FOR HELPING ME WITH THIS
BY OPEN SOURCING HER NAVBAR CODE
https://github.com/bchiang7/v4/blob/master/src/components/nav.js 
---------------- */
import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import { CSSTransition } from 'react-transition-group';
import { throttle } from '../utils/throttle'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
      scrollDirection: 'none',
      lastScrollTop: 0,
      menuOpen: false,
      atTop: true
    }
  }

  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        menuOpen: !this.state.menuOpen,
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }


  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
        style={{
          // transition: 'transform 0.3s ease-out, background-color 0.3s ease-out, box-shadow 0.3s ease-out',
          backgroundColor: (this.state.scrollDirection === 'down' || this.state.atTop ? `transparent` : `white`),
          
        }}
      >
        <div className="container">
          <CSSTransition
            in={this.state.active}
            timeout={400}
          >
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
            <span />
          </div>
          </CSSTransition>

          <div className="navbar-brand">
            {/* LOGO */}
            <Link to="/" className={`navbar-logo display-logo`} title="Logo">
              <img src={logo} alt="Adit" style={{ width: '88px' }} />
            </Link>
          </div>

          {/* NAVLINKS */}
            <CSSTransition
              in={this.state.active}
              timeout={400}
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-start">
                <Link 
                  className="navbar-item" 
                  to="/about" 
                  onClick={() => this.toggleHamburger()}
                  style={{
                    'text-decoration': (this.props.about ? `underline` : `none`),
                    // Passed from Layout.js
                  }}
                >
                  About
                </Link>
              </div>
          </CSSTransition>
        </div> {/* Close 'container' */}
      </nav>
    )
  }
}

export default Navbar