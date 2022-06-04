import React from 'react';

const ProfileEdit = () => {

    
    const handelprofile = (e) => {
        
    }
    return (
        <div className='text-left mt-12'>
            <form onSubmit={handelprofile}>

                <div className='xl:ml-12 ml-3'>
                    <h1 className='text-3xl font-bold border-b-4 my-6 '>Upload Image!</h1>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Image</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> <input type="file" name='img' /></div>
                    </div>
                </div>

                <div className='xl:ml-12 ml-3'>
                    <h1 className='text-3xl font-bold border-b-4 my-6 '>My Details!</h1>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Current Address</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> <input className='input input-bordered input-primary w-full max-w-xs my-1' type="text" name='curaddress' /> </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Permanent  Address</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> <input className='input input-bordered input-primary w-full max-w-xs my-1' type="text" name='peraddress' /></div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>contact Number</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> <input className='input input-bordered input-primary w-full max-w-xs my-1' type="number" name='phone' /></div>
                    </div>
                </div>

                <div className='xl:ml-12 ml-3'>
                    <h1 className='text-3xl font-bold border-b-4 my-6 '>About Me!</h1>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>My self summary</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> <input className='input input-bordered input-primary w-full max-w-xs my-1' type="text" name='about' /></div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>My Goal</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'><input type="text" name='goal' /></div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>My Hobbies</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> <input className='input input-bordered input-primary w-full max-w-xs my-1' type="text" name='hobies' /></div>
                    </div>
                </div>

                <div className='xl:ml-12 ml-3'>
                    <h1 className='text-3xl font-bold border-b-4 my-6 '>Skills!</h1>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Computer Skills</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> <input className='input input-bordered input-primary w-full max-w-xs my-1' type="text" name='comskills' /></div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Language Skills</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> <input className='input input-bordered input-primary w-full max-w-xs my-1' type="text" name='langskills' /></div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Others Skills</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> <input className='input input-bordered input-primary w-full max-w-xs my-1' type="text" name='otherskills' /></div>
                    </div>
                </div>

                <div className='xl:ml-12 ml-3'>
                    <h1 className='text-3xl font-bold border-b-4 my-6 '>Education Qualification!</h1>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Bachelor's</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> <input className='input input-bordered input-primary w-full max-w-xs my-1' type="text" name='bachelor' /></div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Master's</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> <input className='input input-bordered input-primary w-full max-w-xs my-1' type="text" name='master' /></div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-3/12 text-xl font-bold'>Other's</div>
                        <div className='w-1/12 text-xl'>:</div>
                        <div className='w-8/12 text-xl'> <input className='input input-bordered input-primary w-full max-w-xs my-1' type="text" name='others' /></div>
                    </div>
                </div>
                <div className='flex justify-center mt-6'>
                    <input className='btn px-10 my-3' type="submit" name="submit" value="Submit" />
                </div>
            </form>

        </div>
    );
};

export default ProfileEdit;