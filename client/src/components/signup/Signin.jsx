import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './signin.css';
const Signin = () => {

  const [data , setData] = useState({
    email:"",
    password:""
  })
  console.log(data);
  const addData = (e)=>{
    const {name , value} = e.target;
    setData(()=>{
      return{
        ...data,
        [name]:value
      }
    })
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
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value= {data.email} id="email" onChange={addData}  />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value= {data.password} onChange={addData} placeholder='Atleast 6 charecters' />
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