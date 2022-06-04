import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    return (
        <div className='text-left mt-6'>
            <div class="bg-base-200 py-6">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="avatar">
                        <div class="w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h1 class="text-5xl font-bold">{user.displayName}</h1>
                        <h1 class="text-5xl font-bold">{user.email}</h1>
                    </div>
                    <div className='ml-5'>
                        <Link to='profileedit'> <button className=' border-2  '><FontAwesomeIcon className='text-4xl my-2 text-[red]' icon={faPenAlt} /></button></Link>
                    </div>
                </div>

                <div className='xl:ml-12 ml-3'>
                    <h1 className='text-3xl font-bold border-b-4 my-6 '>My Details!</h1>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Current Address</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Permanent  Address</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>contact Number</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> </div>
                    </div>
                </div>

                <div className='xl:ml-12 ml-3'>
                    <h1 className='text-3xl font-bold border-b-4 my-6 '>About Me!</h1>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>My self summary</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>My Goal</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>My Hobbies</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> </div>
                    </div>
                </div>

                <div className='xl:ml-12 ml-3'>
                    <h1 className='text-3xl font-bold border-b-4 my-6 '>Skills!</h1>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Computer Skills</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Language Skills</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Others Skills</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> </div>
                    </div>
                </div>

                <div className='xl:ml-12 ml-3'>
                    <h1 className='text-3xl font-bold border-b-4 my-6 '>Education Qualification!</h1>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Bachelor's</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Master's</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Other's</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Profile;