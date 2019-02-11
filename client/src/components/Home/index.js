import React from 'react';
import Button from '@material-ui/core/Button';
import Plus from './Plus.png';
import Show from './Show.png';

const Home=()=>{
  return (
    <Button variant="contained" color="Secondary">
     <img className='logo' alt='logo' src={Plus } />
   </Button>,

   <Button variant="contained" color="Secondary">
    <img className='logos' alt='logo' src={Show } />
  </Button>
  )
}
export default Home;
