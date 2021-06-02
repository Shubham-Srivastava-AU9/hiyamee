import React,{Fragment, useContext, useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext';



const ProfileDropdown = () => {
  const authContext = useContext(AuthContext);

  const { user, logout } = authContext;
  // const [showUser,setUser] = useState([])

//   useEffect(()=>{
//     setUser(user.user)
//     // console.log(jobs.jobs,'vishnu')

//  },[])


  
  const onLogout = () => {
    logout();
  };

  return (
    <div class='dropdown-menu'>
      <div className='dropdown-card'>
        <div className='profile_card'>
          <div className='row'>
            <div className='col-sm-3 align-self-center'>
              <img src='assets/img/home/jobs_company/4.png' alt='Profile Picture' />
            </div>
            <div className='col-sm-9 align-self-center'>
              <div className='profile_card_content'>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                
                
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