import React from 'react';
import './Signup.css'; 

const Login = () => {
  return (
    <div className='signup'>
      <div className='container'>
        <div className='row'>
        <div className=' login-image col-lg-4 height d-flex justify-content-center align-items-center'>
            <h1 className='text-center heading'>
              Log <br />
              In
            </h1>
          </div>
          <div className='col-lg-8 height d-flex justify-content-center align-items-center'>
           
            <div className='d-flex flex-column w-100 p-5'>
              <input type="email"  className='input p-2 my-2' name='email' placeholder='Enter Your Email'/>
              <input type="username"  className='input p-2 my-2' name='username' placeholder='Enter Your Username'/>
              <input type="password"  className='input p-2 my-2' name='password' placeholder='Enter Your Password'/>
              <button className='signup-button'>Sign Up</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
