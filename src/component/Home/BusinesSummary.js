import { faChartLine, faCity, faDollarSign, faFaceSmile, faSearchPlus, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinesSummary = () => {
    return (
        <div className='bg-slate-100 py-10'>
            <h1 className='text-5xl font-bold'>Our Trust</h1>
            <div className='my-5 flex-cols lg:flex justify-between my-12 mx-5'>
               <div>
                    <FontAwesomeIcon className='text-4xl my-2 text-pink-900' icon={faChartLine} />
                    <p className='text-3xl font-bold text-[green]'>50000+ M</p>
                    <p className='text-xl font-bold'>Per Year Production</p>
                </div>

                <div>
                    <FontAwesomeIcon className='text-4xl my-2 text-pink-900' icon={faDollarSign} />
                    <p className='text-3xl font-bold text-[green]'>$5000000+ M</p>
                    <p className='text-xl font-bold'>Per Year Revenues</p>
                </div>

                <div>
                    <FontAwesomeIcon className='text-4xl my-2 text-pink-900' icon={faUsersGear} />
                    <p className='text-3xl font-bold text-[green] font-bold'>500+ M</p>
                    <p className='text-xl font-bold'>Happy Clients</p>
                </div>

                <div>
                    <FontAwesomeIcon className='text-4xl my-2 text-pink-900' icon={faSearchPlus} />
                    <p className='text-3xl font-bold text-[green]'>$50000+ M</p>
                    <p className='text-xl font-bold'>New Research Expenses</p>
                </div>

                <div>
                    <FontAwesomeIcon className='text-4xl my-2 text-pink-900' icon={faCity} />
                    <p className='text-3xl font-bold text-[green]'>$50000+ M</p>
                    <p className='text-xl font-bold'>Social Development Expenses</p>
                </div>

                <div>
                    <FontAwesomeIcon className='text-4xl my-2 text-pink-900' icon={faFaceSmile} />
                    <p className='text-3xl font-bold text-[green]'>5000+ K</p>
                    <p className='text-xl font-bold'>Workers Work in </p>
                </div>

            </div>

            <div className='shadow-xl bg-white rounded-md lg:w-9/12 w-11/12 mx-auto my-12 p-5 flex justify-around'>
                <div>
                    <p className='text-2xl text-left text-green-800 font-bold'>Have any Question About ur or get a products request?</p>
                    <p className='text-xl text-left my-2'>Don't hesitate to contact us</p>
                </div>
                <div>

                    <button className="btn btn-sm mx-5 px-5 bg-accent text-current">View Product</button>

                    <button className="btn btn-sm mt-5 px-5 bg-primary text-current">Contact Us</button>
                </div>
            </div>

        </div>
    );
};

export default BusinesSummary;