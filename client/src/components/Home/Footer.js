import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4 col-md-2  col-sm-12 align-self-center'>
              <img
                src='/assets/img/logo-white.png'
                className='img img-responsive footer-logo'
                alt='custom-photo'
              />
            </div>
            <div className='col-lg-8 col-md-10 col-sm-12  align-self-center'>
              <div className='menu'>
                <ul>
                  <li>
                    <a href='#'>Search Jobs</a>
                  </li>
                  <li>
                    <a href='#'>Recruit Now</a>
                  </li>
                  <li>
                    <a href='#'>About Hiyamee</a>
                  </li>
                  <li>
                    <a href='#'>Terms & Conditions</a>
                  </li>
                  <li>
                    <a href='#'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='#'>Contact Us</a>
                  </li>
                </ul>
              </div>

              <div className='copyright-content'>
                <div className='social'>
                  <img
                    src='/assets/img/social/facebook.svg'
                    className='img img-responsive social_icons'
                    alt='custom-photo'
                  />
                  <img
                    src='/assets/img/social/instagram.svg'
                    className='img img-responsive social_icons'
                    alt='custom-photo'
                  />
                  <img
                    src='/assets/img/social/linkedin.svg'
                    className='img img-responsive social_icons'
                    alt='custom-photo'
                  />
                  <img
                    src='/assets/img/social/twitter.svg'
                    className='img img-responsive social_icons'
                    alt='custom-photo'
                  />
                </div>
                <div className='copy-content'>
                  <p>&copy; Copyright 2021 Hiyamee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
