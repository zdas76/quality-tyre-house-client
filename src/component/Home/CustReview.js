import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const CustReview = () => {

    const [reviews, setReviews] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('https://boiling-retreat-14854.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data)
            });
    }, []);

    return (    
        <div className='border border-2 my-12'>
            
            <h1 className='text-5xl py-6 font-bold'>Customer Reviews </h1>
            {
                reviews.map(review => (

                    <div key={review.id} className='flex justify-center content-center border w-4/5  m-auto my-5 p-5'>
                        <div className='w-1/6 '>
                            <FontAwesomeIcon className='text-4xl my-2 text-green-900' icon={faUserSecret} />
                            <img className='' src={review.img} alt="" />
                            <p>{review.name}</p></div>
                        <div className='w-5/6 text-justify'>
                            <p className='text-xl font-bold'>{review.title}</p>
                            <p>{review.message}</p>
                        </div>
                    </div>
                ))

            }
        </div>
    );
};

export default CustReview;  <h1>Customers Reviews</h1>