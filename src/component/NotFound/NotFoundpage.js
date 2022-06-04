import React from 'react';
import NotFound from '../../images/404.png';

const NotFoundpage = () => {
    return (
        <div className='flex justify-center'>
            
            <img className='w-fit' src={NotFound} alt="" />
        </div>
    );
};

export default NotFoundpage;