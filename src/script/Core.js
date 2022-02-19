import React from 'react';
import slingshot from '../images/slingshot.svg';

function Core(props) {
  return (
    <>
      <div className='core'>
        <div className='logo'>
          <img src={slingshot} alt='slingshot' />
        </div>
        <p className='income'>00000</p>
      </div>
    </>
  );
}
export default Core;
