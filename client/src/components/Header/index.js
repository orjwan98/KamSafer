
import React from 'react';
import KS_logo from './KS_logo.png';
import Exit from './Exit.png';
const Header=()=>{
  return (
  <div className="header">
  <div>
    <img className='logo' alt='logo' src={KS_logo} />
  </div>
  <div >
    <img className='exit' alt='logo' src={Exit} />
  </div>
  </div>

  )
}
export default Header;
