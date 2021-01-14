import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo-pcr-blanc-90x90.png';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
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
          });
      }
    );
  }

  render() {
    return (
        <div className="container">
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/">
                  Accueil
                </Link>
                <Link className="navbar-item" to="/amb">
                  Amb
                </Link>
                <Link className="navbar-item" to="/social-media-management">
                  Social Média Management
                </Link>
                <Link className="navbar-item" to="/seo">
                  SEO
                </Link>
                <Link className="navbar-item" to="/events">
                  Agence évènementiel
                </Link>
                <Link className="navbar-item" to="/growth-driven-design">
                  Growth Driven Design
                </Link>
                <Link className="navbar-item" to="/agence-idendite-visuelle">
                  Agence Identite Visuelle
                </Link>
                <Link className="navbar-item" to="/sales-enablement">
                  Sales Enablement
                </Link>
                <Link className="navbar-item" to="/content-marketing">
                  Content Marketing
                </Link>
                <Link className="navbar-item" to="/marketing-automation">
                  Marketing Automation
                </Link>
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/products">
                  Products
                </Link>
                <Link className="navbar-item" to="/blog">
                  Blog
                </Link>
                <Link className="navbar-item" to="/contact">
                  Contact
                </Link>
                <Link className="navbar-item" to="/contact/examples">
                  Form Examples
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Link to="/" className="logo" title="Logo">
          <img src={logo} alt="PCR-Communication" style={{ width: '90px', height: '90px' }} />
        </Link>
      </div>
    );
  }
};

export default Navbar;
