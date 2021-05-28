import React from 'react'
import { Link } from 'react-router-dom'
import ProfileDropdown from './ProfileDropdown'

const AuthDBHeader = () => {
  return (
    <header className='auth-header'>
      <nav className='navbar navbar-expand-lg navbar-light auth-header-db '>
        <a className='navbar-brand' href='/company-profile'>
          <img
            draggable='false'
            src='/assets/img/logo-white.png'
            className='logo '
          />
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
          <ul className='navbar-nav ml-auto auth-nav'>
            
            <li className='nav-item'>
              <Link to='/posted-jobs' className='nav-link' id='#'>
                <span className='fa fa-briefcase'></span>
                Posted Jobs
              </Link>
            </li>
            
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbardrop'
                data-toggle='dropdown'>
                <span className='fa fa-bell'></span>
                Notifications
              </a>
              <div class='dropdown-menu communities'>
                <div className='dropdown-card'>
                  <div className='profile_card '>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <ul className='profile_card_menu '>
                          
                          <li>
                            <Link to='#'>Get Database Access</Link>
                          </li>
                          <li>
                            <Link to='total-applicants'>New Candidates Applied</Link>
                          </li>
                          <li>
                            <Link to='/posted-jobs'>New Job Posting Update</Link>
                          </li>
                          <li>
                            <Link to='/company-profile'>Job Posting Update</Link>
                          </li>
                          <li style={{textAlign:"center"}}>
                            <Link to='/notifications'>View All Notifications</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbardrop'
                data-toggle='dropdown'>
                <span className='fa fa-user'></span>
                My Profile
              </a>
              <ProfileDropdown />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default AuthDBHeader
