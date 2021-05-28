import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light  '>
        <a className='navbar-brand' href='/'>
          <img draggable='false' src='/assets/img/logo.png' className='hiyamee-logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#collapsibleNavbar'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='collapsibleNavbar'>
          <ul className='navbar-nav mr-auto'></ul>
          <ul className='navbar-nav ml-auto '>
            <li className='nav-item'>
              <Link to='/login' className='nav-link btn-login' id='#'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/signup' className='nav-link btn-signup ' id='#'>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
