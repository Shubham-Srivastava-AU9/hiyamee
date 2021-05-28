import React from 'react'
import { Link } from 'react-router-dom'
import SideContent from '../../components/Auth/SideContent'

const GetStartedTwo = () => {
  
  return (
    <main className='auth'>
      <div className='custom-container'>
        <div className='row'>
          <SideContent />
          <div className='col-sm-5 align-self-center'>
            <div className='login_form_container'>
              <div className='custom-container'>
                <div className='row'>
                  <div className='login-title-holder'>
                    <h5>Get Started with your Recruiter profile</h5>
                  </div>
                </div>
                <div className='login_form'>
                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label>Point of Contact Name</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                        <input type='text' className='form-control'
                        name = "pname"  autoComplete="on" />
                      </div>
                    </div>
                  </div>
                  
                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label>Point of Contact Mobile</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                        <input type='number' className='form-control'
                        name = "pnumber" autoComplete ='on'
                         />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label>Point of Contact Email</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                        <input type='email' className='form-control'
                        name = "pemail" 
                         />
                      </div>
                    </div>
                  </div>
                  
                  {/* <div className='row'>
                    <div className='col-sm-12 text-right'>
                      <p>
                        <Link href='/forget' className='link'>
                          Forget Password ?
                        </Link>
                      </p>
                    </div>
                  </div> */}
                  <div className='row'>
                    <div className='col-sm-12 text-left'>
                    <Link to ='/profile-complete'><button type='submit'  className='btn-signup-form btn btn-login btn-blue'>
                        Complete Now
                        </button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span 
                      style={{fontFamily: "proxima-regular", 
                      fontSize: "13px",
                      color:"#27272766"}}>
                      Step 2 of 2
                      </span>
                    </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default GetStartedTwo
