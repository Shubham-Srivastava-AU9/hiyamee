import React from 'react'
import { Link } from 'react-router-dom'
import SideContent from '../../components/Auth/SideContent'


const GetStartedOne = () => {

    const onClickHandler = async (e) => {
        e.preventDefault()
       
        window.location.href = '/get-started-two'
      }
  
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
                      <label>Company Website</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                        <input type='text' className='form-control'
                        name = "cwebsite"  autoComplete = "on"
                        
                         />
                      </div>
                    </div>
                  </div>
                  
                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label>Company Phone Number</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                        <input type='number' className='form-control'
                         name = "cnumber" 
                         
                         />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label>About The Company</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                        <textarea type='text' className='form-control about-company-text' 
                          name = "about"  
                        />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label>Company LinkedIn Link</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                        <input type='text' className='form-control'
                        name = "linkden"  
                         />
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label>Company Facebook Link</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                        <input type='text' className='form-control' name ="facebook"  />
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label>Upload Company Logo</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                      
                      <input type='file' id="company-logo-file" className='form-control' hidden="hidden"></input>
                        <button type="button" id="logo-button"><i class="fas fa-upload"></i></button>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label>Upload Video about Company</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                      
                      <input type='file' id="company-video-file" className='form-control' hidden="hidden"></input>
                        <button type="button" id="video-button"><i class="fas fa-upload"></i></button>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label>Upload Images about company</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                        <input type='file' id="company-img-file" className='form-control' hidden="hidden"></input>
                        <button type="button" id="img-button"><i class="fas fa-upload"></i></button>


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
                      <button type='submit' onClick={onClickHandler} className=' btn-signup-form btn btn-login btn-blue'>
                        Proceed
                      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span 
                      style={{fontFamily: "proxima-regular", 
                      fontSize: "13px",
                      color:"#27272766"}}>
                      Step 1 of 2
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

export default GetStartedOne
