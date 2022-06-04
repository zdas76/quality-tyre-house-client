import React from 'react';
import logo1 from '../../images/brands/logo1.jpg';
import logo2 from '../../images/brands/logo2.jpg';
import logo3 from '../../images/brands/logo3.jpg';
import logo4 from '../../images/brands/logo4.jpg';
import logo5 from '../../images/brands/logo5.jpg';
import logo6 from '../../images/brands/logo6.jpg';
import logo7 from '../../images/brands/logo7.jpg';
import logo8 from '../../images/brands/logo8.jpg';
import logo9 from '../../images/brands/logo9.jpg';
import logo10 from '../../images/brands/logo10.jpg';

const Brands = () => {
    return (
        <div className='my-12 p-6 border border-2'>
            <h1 className='text-3xl md:text-5xl font-bold'>Our Best Collaborate Brands</h1>
            <div className='grid grid-cols-2 md:grid-cols-5 justify-items-center pag-4 my-12'>
                <img className='w-40 my-5 h-32' src={logo1} alt="logo" />
                <img className='w-40 my-5 h-32' src={logo2} alt="logo" />
                <img className='w-40 my-5 h-32' src={logo3} alt="logo" />
                <img className='w-40 my-5 h-32' src={logo4 } alt="logo" />
                <img className='w-40 my-5 h-32' src={logo5 } alt="logo" />
                <img className='w-40 my-5 h-32' src={logo6 } alt="logo" />
                <img className='w-40 my-5 h-32' src={logo7 } alt="logo" />
                <img className='w-40 my-5 h-32' src={logo8 } alt="logo" />
                <img className='w-40 my-5 h-32' src={logo9 } alt="logo" />
                <img className='w-40 my-5 h-32' src={logo10 } alt="logo" />
            </div>

        </div>
    );
};

export default Brands;