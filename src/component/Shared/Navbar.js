import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './nav.css'

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "links")} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "links")} to='/products'>Products</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "links")} to='/blogs'>Blogs</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "links")} to='/myportfolio'>My Portfolio</NavLink></li>
        {
            user && <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "links")} to='/dashboard'>Dashboard</NavLink></li>
        }
        <li>{user ? <button onClick={logout} className="text-white font-bold text-xl">Log Out</button> : <NavLink className={({ isActive }) => (isActive ? "active-link" : "links")} to='/login'>Login</NavLink>}</li>
    </>

    return (
        <div className="navbar justify-center bg-blue-400 md:px-10 sticky top-0 z-10">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl xl:text-3xl font-bold">Quality Tyre House</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;