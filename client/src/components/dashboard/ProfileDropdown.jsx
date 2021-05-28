import React,{Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext';



const ProfileDropdown = () => {
  const authContext = useContext(AuthContext);

  const {  logout } = authContext;
  
  const onLogout = () => {
    logout();
  };

  return (
    <div class='dropdown-menu'>
      <div className='dropdown-card'>
        <div className='profile_card'>
          <div className='row'>
            <div className='col-sm-3 align-self-center'>
              <img src='//placeimg.com/300/300/people' alt='Profile Picture' />
            </div>
            <div className='col-sm-9 align-self-center'>
              <div className='profile_card_content'>
                <h3>ACME Corporation</h3>
                <p>@acmecorp</p>
                
                
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <ul className='profile_card_menu'>
                <Link to='/about-company'><button class="view-prof-btn">View Profile</button></Link>
                <li>
                  <Link to='/total-applicants'>Job Applicants</Link>
                </li>
                <li>
                  <a href='/settings'>Settings</a>
                </li>
                <li>
                  <Link to='/' onClick={onLogout}>Sign Out</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDropdown