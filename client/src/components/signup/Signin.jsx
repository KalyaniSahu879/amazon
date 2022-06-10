import React from 'react';
import { NavLink } from 'react-router-dom';
import './signin.css';
const Signin = () => {
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            
              <img src="./blacklogoamazon.png" alt="amazonlogo" />
            
          </div>
          <div className="sign_form">
            <form >
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder='Atleast 6 charecters' />
              </div>
              <button className='signin_btn'>Contenue</button>
            </form>

          </div>
          <div className="create_accountinfo">
            <p>New To Amazon</p>
            <NavLink to="/register">

            <button>Create Your Amazon Account.</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signin