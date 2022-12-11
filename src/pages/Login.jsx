import React from 'react'
import '../pages/Login.css'
import { useState } from 'react'
import axios from 'axios';
import { FaRegUser } from 'react-icons/fa';
import {RiLockPasswordLine} from 'react-icons/ri'
import { Input } from 'antd';
import { Space } from 'antd';
import {box} from '../assets/Group 2.png';
import { Link, useNavigate } from 'react-router-dom'



export const Login = () => {
    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    console.log({username,password})

    const handleUsername=(e)=>
    {
      setUsername(e.target.value)
    }

    const handlePassword=(e)=>
    {
         setPassword(e.target.value)
    }


    const hanbleApi=()=>
    {
        if(password==='' && username==='')
            {
                return alert("error")
            
            }
            else if(password==='')
            {
                return alert("missing password")
            }
        console.log({username,password})
        axios.post('https://reqres.in/api/login',{
            username:username,
            password:password
        }).then(result=>{
          
            console.log(result.data) 
            
        })
       .catch(error=>
        {
            console.log(error)
        
        })
    }
  return (
 <div>
 <div class="row">
  <div class="leftcolumn">
    <div class="card">
        <h2 className='h2'>Welcome<br/><span className='txt'>Enter your Username and Password</span></h2>
        
        <div className='form'>
          <div>
          <Input className='input' placeholder="Username" value={username} onChange = {handleUsername} type="text" prefix={<FaRegUser />} />
          </div>
     <br/>
        <Space direction="horizontal">
        <Input.Password  className='input'
          placeholder="input password" value={password} onChange = {handlePassword} type="text"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }} prefix={<RiLockPasswordLine />}/>
        </Space>

        </div>  
        
           <Link to='/client-list' ><button className="btn" onClick={hanbleApi}>Login</button></Link>
           <p className='forget'>Forget password ?</p>
        </div>


        <div className='terms'>
            <p className='terms-txt'>Terms of Use &nbsp; Privacy Policy <br/>© Punctualiti 2022. All rights reserved</p>
        </div>

     
    </div>

  <div class="rightcolumn">
     <div class="card-1">
     <div className='box'>
     <img src='box'></img>
        </div>
        <div className='desc'>
       <h2>360° Solution for Asset Management</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br/>labore et dolore magna aliqua.</p>
       </div>
     </div>
  </div>
</div>
</div>
  )
}

export default Login;