import React , { useState, useContext, useEffect }from 'react'
import { Link } from 'react-router-dom'
import SideContent from '../../components/Auth/SideContent'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';


const Signup = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/get-started');
    }

    if (error === 'User already exists') {
      setAlert(error, 'primary');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const[user , setUser] = useState({
    name :'',email:'',password:'',cpassword:""
  })
  const {name,email,password,cpassword}= user

  const onChangeInput = e => setUser({ ...user, [e.target.name]: e.target.value });

      
 
const onSubmit = async e =>{
  e.preventDefault();
  if (name === '' || email === '' || password === '') {
    setAlert('Please enter all fields', 'primary');
  } else if (password !== cpassword) {
    setAlert('Passwords do not match', 'primary');
  } else {
    register({
      name,
      email,
      password
    });
  }
  
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
                    <ul className='title'>
                      <li>
                        <Link to='/login'>Login</Link>
                      </li>
                      <li className='active'>
                        <Link to='#'>Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='login_form'>
                <form onSubmit={onSubmit}>
                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label htmlFor ='comapny name'>Company Name</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                        <input type='text' className='form-control' 
                        name = "name"  value = {name} onChange={onChangeInput}
                        required
                        
                         />
                      </div>
                    </div>
                  </div>
                  
                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label>Company Email</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                        <input type='email' className='form-control'
                        name = "email" value = {email} onChange={onChangeInput} required
                       
                         />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label>Password</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                        <input type='password' className='form-control'
                        name = "password" value = {password} onChange={onChangeInput}
                        required minLength="6"
                        
                         />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-4 align-self-center'>
                      <label>Confirm Password</label>
                    </div>
                    <div className='col-sm-8 align-self-center'>
                      <div className='form-group'>
                        <input type='password' className='form-control' 
                        name = "cpassword" value = {cpassword} onChange={onChangeInput}
                        required minLength="6"
                       
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
                      <button type='submit'  className='btn btn-login btn-blue btn-signup-form'>
                        Sign Up
                      </button>
                    </div>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  )
}

export default Signup
