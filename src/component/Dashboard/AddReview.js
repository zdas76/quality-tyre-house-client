import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {

    const [user] = useAuthState(auth);

    console.log(user);

    const handelreview = (e) => {
        e.preventDefault();  
        

        const review = {
            name: user.displayName,
            email: user.email,
            img: user.photoURL,
            title: e.target.title.value,
            message: e.target.message.value,
        }

        
        console.log(review)
        
        const url = `https://boiling-retreat-14854.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(name => {
                e.target.reset();
                console.log(name);
            })

    }

    return (
        <div>
            <h1>Reviews</h1>
            <div className='xl:w-6/12 border mx-auto md:w-9/12 w-12 p-5'>
                <form className='' onSubmit={handelreview}>
                    <input type="text" disabled value={user.displayName} className="input w-full max-w px-12 my-2" />
                    <input type="email" disabled value={user.email} className="input w-full max-w px-12 my-2" />

                    <input type="text" name='title' placeholder='Short Description' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2" />
                    
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message"></textarea>
                    <input type="submit" value="Send Message" className='btn btn-accent px-10 mt-10' />

                </form>
            </div>

        </div>
    );
};

export default AddReview;