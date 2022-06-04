import { faSchoolCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import pranesh from'../../images/pranesh.jpg'

const Myportfolio = () => {
    return (
        <div>
            <div className="hero my-10 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={pranesh} className="max-w-sm rounded-lg shadow-2xl" alt='Pranesh' />
                    <div>
                        <h1 className="text-3xl font-bold my-4">Zibonanando Das (Pranesh)</h1>
                        <h1 className="text-5xl font-bold">MERN Stack Developers</h1>
                        <p className="p-6 text-justify text-xl">
                            I am 100 percent committed to my job. I'm hardworking, patient  and goal oriented. I am the type of person who wants to finish every assigned task by planning ahead of time. I strongly believe that my competencies and skills are relevant to this job and my willingness to work under any kind of pressure because I am a fast learner.</p>
                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-5 p-3'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Address</h2>
                        <p>Sashmore, Bangladesh Agricultural University-2202, <br /> Mymensingh City Corporation, Mymensigh</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Contact Number</h2>
                        <p>Email: zdas76@gmail.com</p>
                        <p>Phone Number: 01725807676</p>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Exam Name</th>
                                <th>Education Board</th>
                                <th>Passing Years</th>
                                <th>Division/GPA/CGPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>SSC</td>
                                <td>Dhaka Board</td>
                                <td>2002</td>
                                <td>3.13/5</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>HSC</td>
                                <td>Dhaka Board</td>
                                <td>2006</td>
                                <td>2.60/5</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>BBS(PASS)</td>
                                <td>National University</td>
                                <td>2010</td>
                                <td>2nd Division</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>MBA</td>
                                <td>National University</td>
                                <td>2014</td>
                                <td>2.66/4</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>PGD in ICT</td>
                                <td>Bangladesh Agricultural University</td>
                                <td>2015</td>
                                <td>2.854/4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-5 p-3'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Skills</h2>
                        <p>HTML5, CSS3, Bootstrap 5, TailwindCSS 3, JavaScripts ES6, ReactJs, Express Js, Firebase, Adobe Photoshop, Adobe Illustratior</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Working Address</h2>
                        <p>Section Officer, Establishment-1 Bangladesh Agricultural University, Mymensingh</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body text-left">
                        <h2 className="card-title text-red-900 font-bold">Recently Completed Project</h2>
                        <a className='text-green-900 text-xl font-bold' href="https://best-furniture-gallery.web.app">Best Furniture Gallery</a>
                        <a className='text-green-900 text-xl font-bold' href="https://smmi-bd.org">SMMI-BD</a>
                        <a className='text-green-900 text-xl font-bold' href="https://tax-laywer-bangladesh.web.app">Tax Laywer BD</a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myportfolio;