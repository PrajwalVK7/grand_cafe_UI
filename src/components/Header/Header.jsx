import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';
import logo2 from '../../assets/logo2.png';

function Header() {
    return (
        <div className='text-white bg-white lg:bg-bg-blue'>
            <div className='flex lg:justify-between md:justify-between sm:justify-start xs:justify-start container mx-auto px-10 align-middle items-center'>
                <div className='relative flex flex-col justify-start'>
                    <img id='logo' className='text-white hidden lg:block' src={logo} alt="Logo" width={130} height={50} />
                    <h4 className='absolute bottom-4 left-5 hidden lg:block'>Advertising</h4>
                    <img id='logo2' className='text-white lg:hidden' src={logo2} alt="Logo 2" width={150} height={30} />

                </div>
                <div className='hidden lg:block'>
                    <h4>Hi Grand Cafe</h4>
                    <div className='mt-4'>
                        <select className='bg-white appearance-auto rounded-lg text-black h-6 px-5' name="category" id="category">
                            <option>Select Category</option>
                            <option value="cat1">Category1</option>
                            <option value="cat2">Category2</option>
                            <option value="cat3">Category3</option>
                        </select>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
