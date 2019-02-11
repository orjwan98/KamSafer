import React from 'react';
import KS_logo from './KS_logo.png';
import Mercy from './Mercy .png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const Login=()=>{
  return (
    <div className='header'>
       <div>
        <img className='logo' alt='logo' src={KS_logo } />
        </div>
       <div className='title'>KamSafer </div>
       <div className='form'>
         <form>
           <label>
            Username:
            <TextField type="text" name="username" />
           </label>
           <label>
            Password:
           <TextField type="Password" name="password" />
           </label>
           <Button type="submit" value="Log in" />
        </form>
      </div>
        <div>
         <img className='logos' alt='logo' src={Mercy } />
         </div>
       </div>
  )
}
export default Login;
