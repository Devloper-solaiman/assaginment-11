import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import icon from '../../image/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, auth } = useContext(AuthContext)
    const logout = () => {
        signOut(auth);
    };


    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/allitems'>All Items</Link></li>
        {user && <li><Link to="/addItem">Add Items</Link></li>}
        {user && <li><Link to="/manageItems">Manage Items</Link></li>}
        {user && <li><Link to="/myitem">My Items</Link></li>}
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/'>About</Link></li>
        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
    </>

    return (
        <section>
            <div className="navbar shadow-lg mt-1 bg-gradient-to-r from-primary/60 to-blue-200 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100as0 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/'><img className='w-24 h-12' src={icon} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </section>
    );
};

export default Navbar;