import React from 'react';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <div className='flex  justify-center items-center' style={{ backgroundColor: '#09115B', color: 'white' }}>
      <div className='grid grid-cols-1 lg:grid-cols-5 container mx-auto justify-center items-center py-10 h-full'>
        <div className='relative my-3'>
          <img id='logo' className='text-white mx-auto' src={logo} alt="" width={'146px'} height={'50px'} />
        </div>
        <div className='my-3'>
          <h2 className='text-center'>About Olapool</h2>
          <ul className='pt-3 text-center'>
            <li>About us</li>
            <li>Contact Us</li>
            <li>News Room</li>
            <li>Investors Relation</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className='text-center my-3'>
          <h2>Support</h2>
          <ul className='pt-3'>
            <li>Product Support</li>
            <li>Report Abuse</li>
          </ul>
        </div>
        <div className='text-center my-3'>
          <h2>Resources</h2>
          <ul className='pt-3'>
            <li>Theaters</li>
            <li>BillBoard</li>
            <li>Tv</li>
            <li>Radio</li>
          </ul>
        </div>
        <div className='text-center my-3'>
          <h2>Account</h2>
          <ul className='pt-3'>
            <li>My Account</li>
            <li>Create Account</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
