import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';



const Sign = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/signup', { username, email, password })
    .then(response => {
      if(response.data.status){
        navigate('/login')
      }
     
    }).catch(err => {
      console.log(err)
    })
  }


  return (

    <div className='sign-up-container'>
      <form className='sign-up-form'       onSubmit={handleSubmit}
>

        <Typography variant="h5" color={'error'}>
          <b> SignUp Page</b>
        </Typography><br></br><br></br>


        <label htmlFor='username'>Name:</label>
        <input type='text' placeholder='Name'         onChange={(e) => setUsername(e.target.value)}/>


        <label htmlFor='email'>Email:</label>
        <input type='email' placeholder='Email'    onChange={(e) => setEmail(e.target.value)} />
     


        <label htmlFor='password'>Password:</label>
        <input type='password' placeholder='********'  onChange={(e) => setPassword(e.target.value)}/>
        


        <button className='signup-button' type='submit'>Sign Up</button>
        <p>Hava an Account?</p>
      <center> <Button >
          <Link to={'/login'} style={{textDecoration:'none',color:'brown'}}>
            Login
            </Link>
            </Button></center> 
      </form>
    </div>
  )
}

export default Sign