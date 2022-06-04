import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile my-12">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-3xl font-bold text-purple-500'>Welcome to Your Dashboard</h1>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
                    
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {
                        !admin &&
                        <>
                            <li><Link to='/dashboard/myorder'>My Order</Link></li>
                            <li><Link to='/dashboard/addreview'>Add A Review</Link></li>        
                        </>
                    }
                    
                    {
                        admin &&
                        <>
                            <li><Link to='/dashboard/addproduct'>Add Products</Link></li>
                            <li><Link to='/dashboard/users'>Make Admin</Link></li>
                            <li><Link to='/dashboard/manageorder'>Manage Orders</Link></li>
                            <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;