import React , { useState, useContext, useEffect }from 'react'
import { Link } from 'react-router-dom'
import SideContent from '../../components/Auth/SideContent'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';



const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/company-profile');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'primary');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'primary');
    } else {
      login({
        email,
        password
      });
    }
  };

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
                      <li className='active'>
                        <Link to='#'>Login</Link>
                      </li>
                      <li>
                        <Link to='/signup'>Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <form  onSubmit = {onSubmit}>
                  <div className='login_form'>
                    <div className='row'>
                      <div className='col-sm-4 align-self-center'>
                        <label>Email Address</label>
                      </div>
                      <div className='col-sm-8 align-self-center'>
                        <div className='form-group'>
                          <input
                            type='email'
                            required
                            name = "email"
                            value = {email}
                            onChange={onChange}
                            
                            
                           
                            className='form-control'
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
                          <input
                            type='password'
                            required
                            name = "password"
                            value = {password}
                            onChange={onChange}
                            
                            
                            
                            className='form-control'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-12 text-right'>
                        <p>
                          <Link to='#' className='link'>
                            Forget Password ?
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-12 text-left'>
                        <button
                          type='submit'
                          className='btn btn-login btn-blue btn-signup-form'>
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
