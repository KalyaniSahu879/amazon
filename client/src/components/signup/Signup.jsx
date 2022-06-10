import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './signin.css';
const Signup = () => {

  const [userData , setUserData] = useState({
    fname:"",
    email:"",
    mobile:"",
    password:"",
    again_password:""
  })
  console.log(userData)
  const addData = (e) =>{
    const {name , value} = e.target;
    setUserData(
      ()=>{
        return {
          ...userData , 
          [name]:value
        }
      }
    )
  }
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazonlogo" />
          </div>
          <div className="sign_form">
            <form >
              <h1>Sign-Up</h1>
              <div className="form_data">
                <label htmlFor="fname">Your Name</label>
                <input type="text" name="fname" id="fname" value={userData.fname}  onChange = {addData}/>
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={userData.email}  onChange = {addData}/>
              </div>
              <div className="form_data">
                <label htmlFor="number">Mobile</label>
                <input type="text" name="mobile" id="mobile"  value={userData.mobile} onChange = {addData}/>
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={userData.password} onChange = {addData} placeholder='Atleast 6 charecters' />
              </div>
              <div className="form_data">
                <label htmlFor="again_password">Password Again</label>
                <input type="again_password" name="again_password" value={userData.again_password} onChange = {addData} id="again_password" placeholder='Atleast 6 charecters' />
              </div>
              <button className='signin_btn'>Contenue</button>
              <div className="signin_info">
                <p>Already Have An Account ?</p>
                <NavLink to="/login">Signin</NavLink>
              </div>
            </form>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Signup