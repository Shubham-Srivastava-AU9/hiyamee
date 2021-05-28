import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main>
      <div className='center_container'>
        <div className='custom-container'>
          <div className='row'>
            <div className='col-sm-5 align-self-center'>
              <img
                src='/assets/img/dashboard/profile/completion.png'
                className='img img-responsive '
                alt='custom-photo'
              />
            </div>
            <div className='col-sm-7 align-self-center'>
              <div className='profile_completion_content'>
                <h1 className='text-danger'>404 ! </h1>
                <h3>Page Not Found</h3>

                <p>
                  The Page you have requested is not found or Unautherized to
                  view.
                </p>

                <div className='btn-holder'>
                  <Link to='/' className='btn btn-lg btn-blue '>
                    Go Home
                  </Link>
                  <Link to='/login' className='btn-link'>
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound



